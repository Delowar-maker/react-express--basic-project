import toast from "react-hot-toast";
import ValidationHelper from "../utility/ValidationHelper.js";
import {useState} from "react";
import ButtonSpinner from "./ButtonSpinner.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {

  let [submit, setSubmit] = useState(false)
  let navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get("email");

    if (ValidationHelper.isEntry(email)) {
      toast.error("Email Required");
    } else {
        setSubmit(true);
        console.log(ValidationHelper.API_BASE())
        // Api Call
        //let res = await axios.post("https://cart-api.teamrabbil.com/api/user-login",{UserEmail:email}
        let res = await axios.post(`${ValidationHelper.API_BASE()}/user-login`,{UserEmail:email})

        if(res.data['msg'] === "success"){

          toast.success(res.data['data']);
          sessionStorage.setItem('email',email)
          navigate("/verify")
        }else {
          toast.error("Request Failed");

        }

    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <form onSubmit={onSubmit} className="p-5">
              <label>Your email Address</label>
              <input name="email" className="form-control mt-1" />
              <button disabled={submit} className="btn btn-danger" type="submit">
                {
                  submit ?(<ButtonSpinner/> ):('Submit')
                }
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;



