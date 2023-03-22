import React, { useState } from "react";
export default function Forms() {
  const [data, setData] = useState({});
  const name = (e) => {
    setData(e.target.value);
  };
  const collect = (e) => {
    e.preventDefault();
    let gender = document.getElementById("gender").value;
    let role = document.getElementById("role").value;
    let status = document.getElementById("married").value;
    let purndata = {
      name: data,
      gender,
      role,
      status
    };
    console.log(purndata);
  };
  return (
    <>
      <div id="container">
        <form onSubmit={collect}>
          <input onChange={name} type="text" id="name" placeholder="name" />
          <label htmlFor="gender">gender</label>
          <select name="gender" id="gender">
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <label htmlFor="role">role</label>
          <select name="role" id="role">
            <option value="front-end">front-end</option>
            <option value="back-end">back-end</option>
            <option value="full-stack">full-stack</option>
          </select>
          <label htmlFor="status">marital status</label>
          <label htmlFor="status">married</label>
          <input type="checkbox" name="married" id="married" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
