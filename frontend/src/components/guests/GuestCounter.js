import React,{useContext} from "react";
import GuestContext from "../../context/guestContext/GuestContext"

export const GuestCounter = () => {
  const {guests} = useContext(GuestContext)

  //total by invited
  const totalInvited = guests.length
  //total by attending
  const attending = guests.filter((guest) => guest.isConfirmed)
  const attendingTotal = attending.length
  //by dietary invited
  const invitedByDietary= (type) => guests.filter(guest => guest.dietary === type).length
  //by dietary atttending
  const attendingByDietary = (type) => attending.filter(guest => guest.dietary===type).length
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Guest</th>
            <th>Invited</th>
            <th>Attending</th>
          </tr>
          <tr>
            <th>Non-Veg</th>
            <td>{invitedByDietary('Non-Veg')}</td>
            <td>{attendingByDietary('Non-Veg')}</td>
          </tr>
          <tr>
            <th>Vegan</th>
            <td>{invitedByDietary('Vegan')}</td>
            <td>{attendingByDietary('Vegan')}</td>
          </tr>
          <tr>
            <th>Pascatarian</th>
            <td>{invitedByDietary('Pascatarian')}</td>
            <td>{attendingByDietary('Pascatarian')}</td>
  
          </tr>
          <tr>
            <th>Total</th>
            <td>{totalInvited}</td>
            <td>{attendingTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
