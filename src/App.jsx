import { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };
  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };
  return (
    <>
      <div className="form-container">
        <form className="registration-form" onSubmit={handleSubmit}>
          {submitted && valid ? (
            <div className="success-message">
              Success! Thank you for registering
            </div>
          ) : null}
          <input
            onChange={handleFirstNameInputChange}
            value={values.firstName}
            className="form-field"
            placeholder="First Name"
            name="firstName"
          />
          {submitted && !values.firstName ? (
            <span>Please enter your first name</span>
          ) : null}
          <input
            onChange={handleLastNameInputChange}
            value={values.lastName}
            className="form-field"
            placeholder="Last Name"
            name="lastName"
          />
          {submitted && !values.lastName ? (
            <span>Please enter your last name</span>
          ) : null}
          <input
            onChange={handleEmailInputChange}
            value={values.email}
            className="form-field"
            placeholder="E-mail"
            name="email"
          />
          {submitted && !values.email ? (
            <span>Please enter your email</span>
          ) : null}
          <button className="form-field" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
