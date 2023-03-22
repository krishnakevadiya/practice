import { useState } from "react";

const initState = {
  name: "",
  age: "",
  address: "",
  department: "",
  salary: "",
  status: false,
  profile: ""
};

function Form() {
  // we learnt state management?
  let api_key= "8b1f01edede5586a463d22be7a935729";
  const [formState, setFormState] = useState(initState);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  const handleChange = async(e) => {
    // destructuring
    const { name, value, type, checked } = e.target;
    let val;
    if(type==='checkbox'){
      val=checked;
    }else if(type==='file'){
      
        try{
            let image = document.getElementById("image");
            let ac_img = image.files[0];
            
            let form = new FormData()
            form.append('image',ac_img)
            
            let res = await fetch(`https://api.imgbb.com/1/upload?key=${api_key}`,{
                method:'POST',
        body:form,
        })
        let data = await res.json();
        console.log(data);
        val=data.data.display_url;
        console.log(val);
        // adf.disabled=false;
    }catch(e){
        console.log(e);
    }
  }else{
    val=value;
  }
    // const val = type === "checkbox" ? checked : value;
    setFormState({ ...formState, [name]: val });
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            name="name"
            onChange={handleChange}
            placeholder="name"
            type="text"
            value={formState.name}
          />
        </div>
        <div>
          <input
            name="age"
            onChange={handleChange}
            placeholder="age"
            type="number"
            value={formState.age}
          />
        </div>
        <div>
          <input
            name="address"
            onChange={handleChange}
            placeholder="address"
            type="text"
            value={formState.address}
          />
        </div>
        <div>
          <select
            value={formState.department}
            name="department"
            onChange={handleChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="Front-end">Front-end</option>
            <option value="Back-end">Back-end</option>
            <option value="Full-stack">Full-stack</option>
          </select>
        </div>
        <div>
          <input
            name="salary"
            onChange={handleChange}
            placeholder="salary"
            type="number"
            value={formState.salary}
          />
        </div>
        <div>
          <label>
            Are you Married?
            <input
              value={formState.status}
              name="status"
              onChange={handleChange}
              type="checkbox"
            />
          </label>
        </div>
        <div>
          <input
            id="image"
            name="profile"
            onChange={handleChange}
            type="file"
          />
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
    </div>
  );
}

export default Form;
