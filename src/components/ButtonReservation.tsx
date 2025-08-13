import { Link } from "react-router-dom";

import { FaBed } from "react-icons/fa"
import "../styles/buttonReservation.scss"

export default function ButtonReservation() {
  return (
    <Link to="/contact">
      <div className="btnReservation">
        <FaBed className="btnReservation__icon"/>
        <h3 className="btnReservation__text heading-3">Reserve Agora</h3>
      </div>
    
    </Link>
  )
}