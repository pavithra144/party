import React from "react";

export const GuestForm = () => {
  return (
    <div className="invite-section">
      <h1>Invite someone</h1>
      <form>
        <input type="text" placeholder="Name" name="name" />
        <input type="text" placeholder="Phone" name="phone" />
        <p className="options-label">Dietary</p>
        <div className=" options ">
          <label className="container">
            Non-veg
            <input type="radio" name="dietary" value="Non-veg" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Vegan
            <input type="radio" name="dietary" value="Vegan" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Pesacatarian
            <input type="radio" name="dietary" value="Pesacatarian" />
            <span className="checkmark"></span>
          </label>
        </div>
        <input type="submit" value="Add Guest" className="btn"></input>
      </form>
    </div>
  );
};
