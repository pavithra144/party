import React, { useState, useContext, useEffect } from "react";
import GuestContext from "../../context/guestContext/GuestContext";

export const GuestForm = () => {
  const { addGuests, editableGuestState, updateGuest, clearEdit } = useContext(
    GuestContext
  );

  const [addGuest, setAddGuest] = useState({
    name: "",
    phone: "",
    dietary: "Non-Veg",
  });

  const { name, phone, dietary } = addGuest;
  const handleChange = (e) => {
    setAddGuest({
      ...addGuest,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (editableGuestState !== null) {
      setAddGuest(editableGuestState);
    } else {
      setAddGuest({
        name: "",
        phone: "",
        dietary: "Non-Veg",
      });
    }
  }, [editableGuestState]);
  // if(editableGuestState !== null) {
  //   console.log(editableGuestState)
  // }
  const onFormSubmit = (e) => {
    e.preventDefault();

    // here, we are editing the guest form and updating the existing form
    //if editableGuestState is not null, then update the existing guest. else,addGuest
    if (editableGuestState !== null) {
      updateGuest(addGuest); //
    } else {
      addGuests(addGuest); // usecontextdata (state variable) // action
      console.log(addGuest);
      setAddGuest({
        name: "",
        phone: "",
        dietary: "Non-Veg",
      });
    }
  };
  return (
    <div className="invite-section">
      <h1>{editableGuestState !== null ? "Edit Guest" : "Invite someone"}</h1>
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
              checked={dietary === "Vegan"}
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
              checked={dietary === "Pesacatarian"}
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
