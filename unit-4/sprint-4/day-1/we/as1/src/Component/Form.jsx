import { useState } from "react";

const initState = {
  email: "",
  password: "",
  employed: false,
  country: ""
};

function Form() {
  // we learnt state management?
  const [formState, setFormState] = useState(initState);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  const handleChange = (e) => {
    // destructuring
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormState({ ...formState, [name]: val });
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            name="email"
            onChange={handleChange}
            placeholder="email"
            type="text"
            value={formState.email}
          />
        </div>
        <div>
          <input
            name="password"
            onChange={handleChange}
            placeholder="password"
            type="password"
            value={formState.password}
          />
        </div>
        <div>
          <label>
            Are you Employed?
            <input
              value={formState.employed}
              name="employed"
              onChange={handleChange}
              type="checkbox"
            />
          </label>
        </div>
        <div>
          <select
            value={formState.country}
            name="country"
            onChange={handleChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="IN">India</option>
            <option value="US">USA</option>
            <option value="CAN">Canada</option>
          </select>
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
    </div>
  );
}

export default Form;
// synthetic
