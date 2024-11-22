"use client"
import React from 'react';

const About = () => {
  return (
    <div>
    <div className='container'>
      <h1>how your days going right now.</h1>
      <p>Whwt about you?</p>
      <style jsx>{`
        .container{
            background-color: red;
            color: yellow;
        }
        `}
      </style>
    </div>
    <div className='container'>
        I am good.
        <style jsx global>{`
        .container{
        color:red;
        background-color: black;
        }
        `}
        </style>
    </div>
    </div>
  );
}

export default About;
