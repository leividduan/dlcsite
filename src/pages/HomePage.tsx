import React from 'react';
import Avatar from '../images/avatar.png'
import { Link } from 'react-router-dom'
import '../styles/pages/home-page.css'

function HomePage(){
    return(
        <div className="container">
            <header className="header-content">
                <img src={Avatar} alt="Avatar"/>
                <h1>Deivid Luan Cardoso</h1>
                <p>Padawan Programmer</p>
            
                <section className="grid grid-content">
                    <div className="item"> <Link to="/about"> TESTE </Link> </div>
                    <div className="item"> <Link to="/about"> TESTE </Link> </div>
                    <div className="item"> <Link to="/about"> TESTE </Link> </div>
                    <div className="item"> <Link to="/about"> TESTE </Link> </div>
                </section>
            </header>
      </div>
      
    );
}


export default HomePage
