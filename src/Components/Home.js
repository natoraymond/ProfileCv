import React from 'react'
import {Link}from 'react-router-dom'

function Home(){
    return(
        <div className='home column'>
            <div className='col-4'></div>
            <div className='col'>
            <img className='mypic' src='ND.jpg' alt='Nato'/>
                <h2>Hi i'm Raymond</h2>
                <h3>I am a Front-End Web Developer a highly skilled and motivated web developer who deliver best quality and scalable software for your business</h3>
                <Link to='/contacts'><button type="button" className="btn btn-primary hire"><h5>download resume</h5></button></Link>
            </div>
            <div className='icon-bar'>
                <a className='active' href='#'><i className='fa fa-home'></i></a>
                <a  href='#'><i className='fa fa-search'></i></a>
            </div>          
        </div>
    )
}
export default Home;