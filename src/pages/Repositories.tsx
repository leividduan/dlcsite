import { GetStaticProps } from "next";
import styled from 'styled-components'
import api from "../api/api";
import { iRepositories } from '../interface/interfaces'

const RepoCard = styled.a`
  border: 1px solid #fa4604;
  text-decoration: none;
  border-radius: 10px;
  margin: 0.5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  justify-content: center;
  font-size: 1.5em;
  transition: 0.2s;

  font-family: Roboto Mono ;
  color: #fa4604;

  flex-basis: 45%;
  max-width: 384px;
  max-height: 84px;
  :hover{
    border: 1px solid #ba5216;
    color: #ba5216;
    h3{
      color: #ba5216;
    }
    p{
      color: #ba5216;
    }
  }
  @media(max-width:700px){
    width: 80vw;
  }
`
const Repo = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 150px 150px;
  width: 800px;
  margin-top: 5rem;
  @media(max-width: 880px){
    grid-template-rows: 100px 100px;
    width: 80vw;
  }
  @media(max-width:700px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-template-rows: 100px 100px;
  }
`
const RepoH3 = styled.h3`
  color: #fa4604;
  font-size: 2rem;
  margin-block-start: 0em;
  margin-block-end: 0em;
  padding-bottom: 0.5rem;
  font-weight: 800;
  @media(max-width: 880px){
    font-size: 1.3rem;
  }
`

const RepoP = styled.p`
  color: #fa4604;
  font-weight: 400;
  margin-bottom: 15px;
  font-size: 1rem;
  padding: 0px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  @media(max-width: 880px){
    font-size: 0.9rem;
    padding: 0px;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
`

const ContainerRepo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`


function Repositories( props:iRepositories){
  const repo = props.repo;

  return(
    <ContainerRepo>
          <Repo>
            {repo.map( repo =>{
              return(
              <RepoCard href={repo.html_url} target="_blank" rel="noopener noreferrer" className="item"> 
                <RepoH3>{repo.name}</RepoH3>
                <RepoP>{repo.description}</RepoP>
              </RepoCard>
              )
            })}
          </Repo>
      </ContainerRepo>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/repos')
  const repo = await response.data;
  return {
    props: { repo },
  };
}

export default Repositories;