import React, { useContext } from 'react';
import logo from '../../../assets/bnlogo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";



const Header = () => {

    return (
        <Container>
            <div className='text-center mt-2'>
                <img src={logo} alt="" />
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-light p-1'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-success' speed={60}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

        </Container>
    );
};

export default Header;