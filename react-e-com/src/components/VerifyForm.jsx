import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import ValidationHelper from "../utility/ValidationHelper.js";
import ButtonSpinner from "./ButtonSpinner.jsx";
const VerifyForm = () => {
  let [submit, setSubmit] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get("otp");

    if (ValidationHelper.isEntry(otp)) {
      toast.error("Verification Code Required");
    } else {
      let email = sessionStorage.getItem("email");
      setSubmit(true);

      let res = await axios.post(
        `${ValidationHelper.API_BASE()}/verify-login`,
        {
          UserEmail: email,
          OTP: otp,
        }
      );
      setSubmit(false);

      if (res.data["msg"] === "success") {
        sessionStorage.removeItem("email");
        sessionStorage.setItem("token", res.data["data"]);
        window.location.href = "/";
      } else {
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
              <label>Verifaication code</label>
              <input name="otp" type="text" className="form-control mt-1" />
              <button
                disabled={submit}
                className="btn btn-danger"
                type="submit"
              >
                {submit ? <ButtonSpinner /> : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyForm;
