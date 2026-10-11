import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    text: "",
    checkbox: false,
    radio: "",
    select: "",
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="form-container">
      <h1>Form Examaple </h1>
      <form>
        {/* text input */}
        <div clasName="form-field">
          <label>text : </label>
          <label>
            <input
              type="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
            ></input>
          </label>
        </div>

        {/* checkbox */}

        <div className="form-field">
          <label>
            <input
              type="checkbox"
              name="checkbox"
              checked={formData.checkbox}
              onChange={handleChange}
            ></input>
            Checkbox
          </label>
        </div>

        {/* radio buttons */}
        <div className="form-field">
          <label>Radio :</label>
          <label>
            <input
              type="radio"
              name="radio"
              value="option 1"
              checked={formData.radio === "option 1"}
              onChange={handleChange}
            />
            Option 1
          </label>

          <label>
            <input
              type="radio"
              name="radio"
              value="option 2"
              checked={formData.radio === "option 2"}
              onChange={handleChange}
            />
            Option 2
          </label>
        </div>

        {/* drop down */}
        <div className="form-field">
          <label>select : </label>
          <select name="select" value={formData.select} onChange={handleChange}>
            <option value=""> -- Choose an Option --</option>
            <option value="option 1"> option 1</option>
            <option value="option 2"> option 2 </option>
          </select>
        </div>
      </form>

      <div className="form-data">
        <h3>Form Data</h3>
        <p>
          <strong>Text :</strong>
          {formData.text || "N/A"}
        </p>
        <p>
          <strong>Checkbox :</strong>
          {formData.checkbox ? "checked" : "unchecked"}
        </p>
        <p>
          <strong>Radio :</strong>
          {formData.radio || "N/A"}
        </p>
        <p>
          <strong>select :</strong>
          {formData.select || "N/A"}
        </p>
      </div>
    </div>
  );
}

export default App;
