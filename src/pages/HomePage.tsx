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
                    <a href="https://github.com/leividduan" target="_blank" rel="noopener noreferrer" className="item"> 
                        <h3>GitHub</h3>
                        <p>Meu perfil do GitHub. Espero que goste! :) </p>
                    </a>
                    <a href="https://www.linkedin.com/in/deivid-luan-c-08051811b/" target="_blank" rel="noopener noreferrer" className="item"> 
                        <h3>LinkedIn</h3>
                        <p>Meu perfil no LinkedIn.</p>
                    </a>
                    <Link to="/repositories" style={{textDecoration: 'none'}} className="item"> 
                        <h3>Repositórios</h3>
                        <p>Um overview sobre os meus repositórios.</p>
                    </Link>
                </section>
            </header>
      </div>
      
    );
}


export default HomePage
