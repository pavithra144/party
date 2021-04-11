import React, { useContext,useEffect } from "react";
import GuestContext from "../../context/guestContext/GuestContext";
import { GuestSingle } from "./GuestSingle";

const Guests = () => {
  const { guests, filterGuest,search,getGuests } = useContext(GuestContext);

  useEffect(() => {
    getGuests()
  }, [])
  return (
    <div className="guests">
        {/* if search is not null or user entered a value string then map the GuestSingle component */}
      {search !== null
        ? search.map((guest) => <GuestSingle key={guest._id} guest={guest} />)
        : //  if filterGuest is true then show guest confirmed
          guests
            .filter((guest) => !filterGuest || guest.isConfirmed)
            .map((guest) => <GuestSingle key={guest._id} guest={guest} />)}
    </div>
  );
};

export default Guests;
