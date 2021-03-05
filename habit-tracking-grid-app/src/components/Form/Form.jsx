import React, { useState } from "react";
import "./Form.css";
import { useGlobalContext } from "../../context/context";
import { formatDateObj } from "../../utils/utils";

const initialState = {
  id: "",
  name: "",
  description: "",
  startDate: formatDateObj(new Date()),
  doneTasksOn: [],
};

const Form = ({ handleClose }) => {
  const { addNewHabit } = useGlobalContext();
  const [formData, setFormData] = useState(initialState);

  const submitNewHabit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, id: new Date().getTime().toString() });
    addNewHabit(formData);
    handleClose();
  };

  return (
    <form>
      <h2>Track a new habit</h2>
      <div className="form-control">
        <label htmlFor="habitName">Name</label>
        <input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          type="text"
          name="habitName"
          id="habitName"
        />
      </div>
      <div className="form-control">
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          name="startDate"
          id="startDate"
          value={formData.startDate}
          onChange={(e) =>
            setFormData({
              ...formData,
              startDate: formatDateObj(e.target.value),
            })
          }
        />
      </div>
      <div className="form-control">
        <label htmlFor="desc">Describe your habit</label>
        <textarea
          placeholder="Do atleast 30 mins of exercise daily..."
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          name="desc"
          id="desc"
        />
      </div>
      <div className="submit-form-btn-div">
        <button type="submit" onClick={(e) => submitNewHabit(e)}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
