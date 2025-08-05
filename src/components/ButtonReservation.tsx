import { FaBed } from "react-icons/fa"
import "../styles/buttonReservation.scss"

export default function ButtonReservation() {
  return (
    <div className="btnReservation">
      <FaBed className="btnReservation__icon"/>
      <h3 className="btnReservation__text heading-3">Reserve Agora</h3>
    </div>
  )
}