import { GetStaticProps } from "next";
import api from "../api/api";
import { iRepositories } from '../interface/interfaces'

function Repositories( props:iRepositories){
  const repo = props.repo;

  return(
    <div>
          <section>
            {repo.map( repo =>{
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

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('https://api.github.com/users/leividduan/repos')
  const repo = await response.data;
  return {
    props: { repo },
  };
}

export default Repositories;