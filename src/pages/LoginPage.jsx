import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const formDataInitial = {
  email: "",
  password: "",
  rememberMe: false,
};

export const LoginPage = ({ setUser }) => {
  // email
  // şifre
  // beni hatırla
  const [formData, setFormData] = useState(formDataInitial);
  const history = useHistory();

  const reset = () => {
    setFormData(formDataInitial);
  };

  const inputChangeHandler = (event) => {
    const { value, name, type, checked } = event.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // login request
    // axios
    //   .post("http://myweb.com/api/login", formData)
    //   .then((res) => {
    //     console.log(res);
    //     // todo: ana sayfaya yönlendir
    //   })
    //   .catch((err) => {
    //     console.error("AXIOS ERR: ", err);
    //   });
    setUser({ name: formData.email, email: formData.email });
    history.push("/");
  };

  useEffect(() => {
    console.warn(" ****** FORM DATA STATE UPDATED ****** ");
    console.log(formData);
  }, [formData]);

  return (
    <div>
      <h1 className="sayfa-baslik">Login Page</h1>
      <hr />
      <div className="form-container">
        <div className="form-bg"></div>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={inputChangeHandler}
              data-cy="login-email-input"
            />
          </div>
          <div>
            <label htmlFor="login-pass">Password</label>
            <input
              id="login-pass"
              type="password"
              name="password"
              value={formData.password}
              onChange={inputChangeHandler}
              data-cy="login-password-input"
            />
          </div>
          <div>
            <label htmlFor="login-remember">Remember me</label>
            <input
              id="login-remember"
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={inputChangeHandler}
              data-cy="login-remember-input"
            />
          </div>
          <div>
            <label></label>
            <div>
              <button
                className="btn hover:animate-ping p-[22px]"
                type="submit"
                data-cy="login-submit-btn"
              >
                Login
              </button>
              <button className="btn" type="button" onClick={reset}>
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
