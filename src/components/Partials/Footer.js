import React from 'react'
import { Row } from 'react-bootstrap'
import '../statics/styles/Footer.css'
import { CDBBtn, CDBIcon, CDBBox } from 'cdbreact';

function Footer() {
  return (
    <div className='footer  bg-warning mt-auto'>
      <Row>
        <div className='col-4 my-auto'>
          Restaurant Perito
        </div>
        <div className='col-3'>
          Proyecto 4 UDD - 2022
        </div>
        <div className='col-5'>
        <CDBBox display="flex align-context-center">
        <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
          </CDBBox>
        </div>
      </Row>
    </div>
  )
}

export default Footer