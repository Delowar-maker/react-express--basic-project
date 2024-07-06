import toast from "react-hot-toast";
import ValidationHelper from "../utility/ValidationHelper.js";

const LoginForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get("email");
    if (ValidationHelper.isEntry(email)) {
      toast.error("Email Required");
    } else {
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
              <button className="btn btn-danger">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
