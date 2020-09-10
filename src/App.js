import React from 'react';
import './App.css';
import styled from "styled-components"

const HomeStyle = styled.div`
font-family: 'Baskerville-BoldItalic';
color: #e6e6e6;
background-color: #c60606;
a{
  background-color: #017d37;
  padding: 15px;
  color: white;
  border-radius: 25px;
}
p{
  width: 60%;
  margin: auto
}
h1{
  text-align: center;
}
img{
  height: 350px;
  margin-bottom: 10px;
}
.header{
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #b52c2c;
}
.footer{
  text-align: center;
  background-color: #b52c2c;
  padding-bottom: 10px;
}
.row{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
hr{
  width: 81%
}
.container-main{
  background-color: #0c9547;
  padding-top: 10px;
}
.main{
  display: flex;
  width: 80%;
  margin: auto
}
.container-body1{
  background-color: #c60606;
}
.body1{
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: auto
}
.externalLinks{
  background-color: #b52c2c;
  margin-bottom: 100px;
}
.links{
  height: 100px;
}
`

function App() {
  return (
    <>
      <HomeStyle>
        <div className='header'>

          <h1>
            Xmas Countdown!
          </h1>

          <div>
            <a href='' target='_blank' rel="noopener noreferrer">
              DOWNLOAD ON THE APP STORE!
            </a>
          </div>

        </div>

        <div className='container-main'>
          <h1>
            Is Today Christmas?
          </h1>

          <div className='main'>

            <img
              src={require('./Screenshots/1_XmasWebHome.png')}
              alt='Home Page'
            />

            <p>
              Have you been wondering lately if today is Christmas? Well probably not, but have you wondered how many more days there are until Xmas? Then do we have an app for you! Xmas Countdown counts down the weeks, days, hours, minutes, and even seconds until Christmas. Simple and to the point, this app will give you all the information you need in regards to the question "is today Christmas?"
            </p>


          </div>
        </div>


        <div className='container-body1'>
          <h1>
            Time Variations!
          </h1>

          <div className='body1'>

            <img
              src={require('./Screenshots/2_XmasWebWeeks.png')}
              alt='Game Screen'
            />

            <img
              src={require('./Screenshots/3_XmasWebDays.png')}
              alt='Game Screen'
            />

            <img
              src={require('./Screenshots/4_XmasWebHours.png')}
              alt='Game Screen'
            />

            <img
              src={require('./Screenshots/5_XmasWebMinutes.png')}
              alt='Game Screen'
            />

            <img
              src={require('./Screenshots/6_XmasWebSeconds.png')}
              alt='Game Screen'
            />

          </div>
        </div>

        <div className='container-main'>
          <h1>
            Want to know more about this App?
          </h1>

          <div className='main row links'>

            <div>
              <a href='https://docs.google.com/document/d/1gQ_XltK3mL76A3yiN_XeFO3K_2HxA2_vWTBPhYP_PRk/edit?usp=sharing' target='_blank' rel="noopener noreferrer" className='externalLinks'>
                Privacy Policy
            </a>
            </div>

            <div>
              <a href='https://docs.google.com/document/d/1-5ZiAoXzUQLTHJXYdp5CVHP8gznryCs0HklFUje5eZQ/edit?usp=sharing' target='_blank' rel="noopener noreferrer" className='externalLinks'>
                Terms of Use
            </a>
            </div>

          </div>
        </div>

        <div className='footer'>

          <div className='row'>

            <h1>
              NAW Putter
            </h1>

            <div>
              <a href='' target='_blank' rel="noopener noreferrer">
                DOWNLOAD ON THE APP STORE!
              </a>
            </div>

          </div>

          <hr />

          <div className='row'>

            <p>
              nawdevelopment@gmail.com
            </p>

            <p>
              Built in Colorado | Copyright © 2020 NAW Development LLC.
            </p>

          </div>

        </div>
      </HomeStyle>
    </>
  );
}

export default App;
