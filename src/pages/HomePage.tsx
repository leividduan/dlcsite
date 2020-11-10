import React, { useEffect, useState } from 'react';
import Avatar from '../images/avatar.png'
import { Link } from 'react-router-dom'
import api from '../services/api'
import '../styles/pages/home-page.css'

interface Perfil{
    bio : string,
    avatar_url: string,
  }

function HomePage(){

    const [perfil, setPerfil] = useState<Perfil>()

    useEffect(() => {
        api.get('https://api.github.com/users/leividduan').then(response => {
          setPerfil(response.data);
        })
    });

    return(
        <div className="container">
            <header className="header-content">
                <img src={perfil?.avatar_url} alt="Avatar"/>
                <h1>Deivid Luan Cardoso</h1>
                <p>{perfil?.bio}</p>
            
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
                    <Link to="/contact" style={{textDecoration: 'none'}} className="item">
                        <h3>Contato</h3>
                        <p>Me envie uma mensagem ou e-mail.</p>
                    </Link>
                </section>
            </header>
      </div>
      
    );
}


export default HomePage
