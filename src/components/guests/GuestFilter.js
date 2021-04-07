import React,{useContext} from 'react'
import GuestContext from "../../context/guestContext/GuestContext"

export const GuestFilter = () => {
    const {toogleFilterAction} = useContext(GuestContext)
    return (
        <div className="toogle">
            <label className="switch">
                <input type="checkbox" onChange={()=> toogleFilterAction()}/>
                <span className="slider round"></span>
            </label>
            <p className="lead">show attending Participants</p>
        </div>
    )
}
