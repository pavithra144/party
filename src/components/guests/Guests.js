import React,{useContext} from 'react'
import GuestContext from "../../context/guestContext/GuestContext"
import { GuestSingle } from './GuestSingle'

const Guests = () => {
    const {guests,filterGuest} = useContext(GuestContext)
    return (
        <div className="guests">
            {guests.filter((guest) => ! filterGuest || guest.isConfirmed ).map(guest => <GuestSingle key={guest.id} guest={guest} /> )}
            
        </div>
    )
}

export default Guests
