import React from 'react'
import '../style/component/banner.css'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Logo from '../../src/asset/logo.png'


const Banner = () => {
  return (
    <div className='banner-area two'>
        <div  className='banner-shape-two'>
            <img></img>
            <span></span>
        </div>

        <div className='d-table'>
            <div className="d-table-cell">
                <Container fluid>
                    <div className='bann-content'>
                        <span>IT Startup Company</span>
                        <h1>Digital IT Startup Cognitive Solution For You</h1>
                        <p>Digital Solution dolor sit amet consectetur adipisicing elit sed do eiusmod</p>
                    </div>
                </Container>
            </div>
        </div>
    </div>
  )
}

export default Banner;