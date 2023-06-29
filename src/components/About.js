import React from 'react';
import Navbar from './Navbar';
import HeaderTitle from './HeaderTitle';
import Member from './Member';
import Title from './Title';
import Card from './Card';
import CardReverse from './CardReverse';
import Footer from './Footer';
import './style/About.css';
import Services from './Services';
// import './App.css';


const About = () =>{
    return(
    <div>
        <div className='nav-2'><Navbar/>
        <HeaderTitle heder='ABOUT US' subheder=''/>

        <div className='top__section'>
          <div className='top__section__component'>
            <Card imageSource = {require('../images/about2.jpg')} heder='The power of productivity through creative ideas.' info ='We come up with creative solutions for all your things. With the help of our team of experts, you always get professional service from us. This will increase productivity.'/>
          </div>

          <div className='top__section__component'>
            <CardReverse imageSource = {require('../images/about3.jpg')} heder='Helping you open windows of the world of Technology.' info ='As opposed to the technology utilized for personal or entertainment purposes, IT is typically used in the context of corporate activities. Telecommunications and computer technology are both included in the business usage of IT.'/>
          </div>
        </div>
        <Title title='Creative solutions for your business needs.' subtitle='As a team of professionals, we are doing our best to providing you with a high-quality service. '/>

        <Services/>

        <Title title='Our team. Your advantage' subtitle='We are a team of professionals doing our best to bring a good and quality service.'/>
        <div className='team__members'>
          <div className='width__tile' ><Member imageSource = {require('../images/yasithEranda2.png')} name='YASITH ERANDA' designation='Graphic and Web Designer, Tech Enthusiast, Developer'
          shortintro='Yasith who is an undergraduate at UWU, has always been involved in the trends in IT is the main designer of the team.'/></div>
          <div className='width__tile'><Member imageSource = {require('../images/pradishan.png')} name='K. PRADISHAN' designation='Graphic Designer, Video Editor & Web Designer'
          shortintro='Karunakaran Pradishan undergraduate at UWU, has actively involved in design & dvelopment team at Texyto'/></div>
          <div className='width__tile'><Member imageSource = {require('../images/yasiraBanuka.jpg')} name=' YASIRA BANUKA' designation='Article Writer, Content Writer and Tech Enthusiast'
          shortintro='Yasira is an Undergraduate of the Sri Lanka Institute of Information Technology who is a key member of the texyto team'/></div>

        </div>
        <div className='team__members'>
          <div className='width__tile' ><Member imageSource = {require('../images/kasunSanjaya.jpg')} name='KASUN SANJAYA' designation='Graphic Designer'
          shortintro='Kasun who’s currently undergraduate at UWU is involved in the design team at Texyto'/></div>
          <div className='width__tile'><Member imageSource = {require('../images/damsaraRasadun.jpeg')} name='DAMSARA RASANDUN' designation='Content Writer, Tech Enthusiast'
          shortintro='Damsara who is a Civil Engineer in Academics still have his hands in the world of Tech.'/></div>
          <div className='width__tile'><Member imageSource = {require('../images/yasithEranda.jpeg')} name='YASITH ERANDA' designation='Graphic Designer & Video Editor'
          shortintro='Yasith who is an undergraduate at UWU, has always been involved in the trends in IT is the main'/></div>
        </div>
        </div>
        {/* <Title title='Creative solutions for your business needs.' subtitle='As a team of professionals, we are doing our best to providing you with a high-quality service. '/> */}

        {/* <Services/> */}


        <Footer/>
    </div>
  );
}

export default About;
