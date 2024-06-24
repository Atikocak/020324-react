import { useEffect, useState } from "react";
import { Counter } from "../components/Counter";

const contactformDataInitial = {
  title: "",
  type: "",
  message: "",
  color: "",
};

const colors = ["red", "green", "blue"];

export const ContactPage = () => {
  const [formData, setFormData] = useState(contactformDataInitial);

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
    axios
      .post("http://myweb.com/api/login", formData)
      .then((res) => {
        console.log(res);
        // todo: ana sayfaya yönlendir
      })
      .catch((err) => {
        console.error("AXIOS ERR: ", err);
      });
  };

  useEffect(() => {
    console.warn(" ****** FORM DATA STATE UPDATED ****** ");
    console.log(formData);
  }, [formData]);

  return (
    <div>
      <h1>Contact Us!</h1>
      <hr />
      <div className="form-container">
        <div className="form-bg"></div>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="contact-title">Başlık</label>
            <input
              id="contact-title"
              type="text"
              name="title"
              value={formData.title}
              onChange={inputChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="login-email">Tip</label>
            <select
              name="type"
              onChange={inputChangeHandler}
              value={formData.type}
            >
              <option disabled selected value={""}>Lütfen ileti tipi seçiniz...</option>
              <option>Şikayet</option>
              <option>Öneri</option>
              <option>Andaç</option>
            </select>
          </div>
          <div>
            <label htmlFor="contact-message">Mesaj</label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={inputChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="contact-color">Renk</label>
            {colors.map((color) => (
              <div key={color}>
                <label htmlFor={"contact-" + color}>{color}</label>
                <input
                  id={"contact-" + color}
                  type="radio"
                  name="color"
                  value={color}
                  checked={formData.color === color}
                  onChange={inputChangeHandler}
                />
              </div>
            ))}
          </div>
          <div>
            <label></label>
            <div>
              <button className="btn" type="submit">
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
