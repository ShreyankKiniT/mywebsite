import React from 'react';
import {Grid,Cell} from 'react-mdl';
import web from "../src/images/img2.png";
import { NavLink } from 'react-router-dom';
import Common from './Common';



const Aboutme =() => {
    return(
        <Common name='Welcome to About Page' content="Decision Scientist by profession, I love to learn and tackle new challenges and make the best of the opportunities provided. Currently, the world of Deep Learning and its advancements have kept me on this path as an ever learner." content1="Apart from technologies and computers, I have a passion for aviation and commercial flights. I have clocked in numerous hours on scaled simulations and performed advanced levels of takeoffs/landings at commercial airports in the B-737-800 simulated cockpits." imgsrc={web} visit='/contact' btname="Contact Now" />
    );
};
export default Aboutme;