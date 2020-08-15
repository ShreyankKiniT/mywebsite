import React from 'react';
import { NavLink } from 'react-router-dom';
import Contactpage from './contactpage';
import {Grid,Cell} from 'react-mdl';
import web from "../src/images/contact.png";


const Contact =() => {
    return(
        
        <Contactpage name='Contact Me' content="shreyankop2@gmail.com" content1="(+91) 9341967919" imgsrc={web} link='https://www.linkedin.com/in/shreyank-kini-b3b48a145/' link1="https://github.com/ShreyankKiniT"/>
        
    );
};
export default Contact;
