import React, {useState} from 'react';
import ButtonSpinner from "./ButtonSpinner.jsx";
import Helper from "../utility/Helper.js";
import toast from "react-hot-toast";
import axios from "axios";

const VerifyForm = () => {

    let [submit,SetSubmit]=useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        let formDate=new FormData(e.target);
        let otp=formDate.get('otp');
        if(Helper.isEmpty(otp)){
            toast.error("Verification Code Required !")
        }else {
            let email=sessionStorage.getItem('email')
            SetSubmit(true)
            let res=await axios.post(`${Helper.API_BASE}/verify-login`,{UserEmail:email,OTP:otp})
            SetSubmit(false)
            if(res.data['msg']==="success"){
                sessionStorage.removeItem('email')
                sessionStorage.setItem("token",res.data['data'])
                window.location.href="/"
            }else {
                toast.error("Request Fail !")
            }
        }
    }



    return (
        <div className="container mt-5">
            <div className="row justify-content-center ">
                <div className="col-md-4">
                    <div className="card">
                        <form onSubmit={onSubmit} className="p-4">
                            <label className="form-label">Verification Code</label>
                            <input name="otp" type="text" className="form-control mt-1"/>
                            <button disabled={submit} type="submit" className="btn btn-danger w-100 mt-2">
                                {submit ? (<ButtonSpinner/>) : ("Submit")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyForm;