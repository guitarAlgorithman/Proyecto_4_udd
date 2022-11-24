import React from 'react'
import { Row } from 'react-bootstrap'
import CheckReserva from './Partials/CheckReserva'
import Reservacion from './Partials/Reservacion'

function Reserva() {
  return (
    <div>
      <Row>
      <Reservacion/>
      </Row>
      <Row>
      <CheckReserva/>
      </Row>
    </div>

  )
}

export default Reserva