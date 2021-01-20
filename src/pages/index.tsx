import { GetStaticProps } from 'next'
import Link from 'next/link'
import { iPerfil } from '.././interface/interfaces'
import api from '../api/api'
import styled from 'styled-components'

const HeaderContent = styled.div`
`


function Home( props:iPerfil ) {
  const user = props.user
  return(
    <div>
      <header>
        <img src={user?.avatar_url} alt="Avatar"/>
        <h1>Deivid Luan Cardoso</h1>
        <p>{user?.bio}</p>
        <section>
            <a href="https://github.com/leividduan" target="_blank" rel="noopener noreferrer" className="item"> 
                <h3>GitHub</h3>
                <p>Meu perfil do GitHub. Espero que goste! :) </p>
            </a>
            <a href="https://www.linkedin.com/in/leividduan/" target="_blank" rel="noopener noreferrer" className="item"> 
                <h3>LinkedIn</h3>
                <p>Meu perfil no LinkedIn.</p>
            </a>
            <Link href="/repositories">
              <a>
                <h3>Repositórios</h3>
                <p>Um overview sobre os meus repositórios.</p>
              </a>
            </Link>
        </section>
      </header>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('')
  const user = await response.data;
  return {
    props: { user },
  };
}

export default Home;
