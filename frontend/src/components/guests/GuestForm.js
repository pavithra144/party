import React, { useState, useContext } from "react";
import GuestContext from "../../context/guestContext/GuestContext";

export const GuestForm = () => {
  const [addGuest, setAddGuest] = useState({
    name: "",
    phone: "",
    dietary: "Non-Veg",
  });

  const { addGuests } = useContext(GuestContext);
  const { name, phone, dietary } = addGuest;
  const handleChange = (e) => {
    setAddGuest({
      ...addGuest,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    addGuests(addGuest) // usecontextdata (state variable) // action 
    console.log(addGuest);
    setAddGuest({
      name: "",
      phone: "",
      dietary: "Non-Veg",
    });
  };
  return (
    <div className="invite-section">
      <h1>Invite someone</h1>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
        <p className="options-label">Dietary</p>
        <div className=" options ">
          <label className="container">
            Non-veg
            <input
              type="radio"
              name="dietary"
              value="Non-Veg"
              checked={dietary === "Non-Veg"}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Vegan
            <input
              type="radio"
              name="dietary"
              value="Vegan"
              onChange={handleChange}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Pesacatarian
            <input
              type="radio"
              name="dietary"
              value="Pesacatarian"
              onChange={handleChange}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <input type="submit" value="Add Guest" className="btn"></input>
      </form>
    </div>
  );
};
