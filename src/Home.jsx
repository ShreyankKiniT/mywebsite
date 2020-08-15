import React from 'react';
import {Grid,Cell} from 'react-mdl';
import web from "../src/images/img2.png";
import { NavLink } from 'react-router-dom';
import Common from './Common';



const Home =() => {
    return(
        <Common name='The World Is One Big Data Problem' content="Definite Epochs & A Balanced Learning Rate, Will Produce The Best Results!" imgsrc={web} visit='/project' btname="Get Started" />
    );
};
export default Home;