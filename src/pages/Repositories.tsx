import React, { useEffect, useState } from 'react';
import api from '../services/api';
import '../styles/pages/repositories.css'

interface Repositories{
  name : string,
  html_url: string,
  description: string
}

function Repositories() {

  const [repos, setRepos] = useState<Repositories[]>([])

  useEffect(() => {
      api.get('https://api.github.com/users/leividduan/repos').then(response => {
        setRepos(response.data);
      })
  }, []);

    return (
      <div className="container-repositories">
          <section className="grid grid-content-repos">
            {repos.map( repo =>{
              return(
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="item"> 
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
              </a>
              )
            })}
          </section>
      </div>
    );
  
}

export default Repositories
