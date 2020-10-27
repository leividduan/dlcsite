import { config } from 'process';
import React, { Component } from 'react';
import api from '../services/apiGitHub';

class Repositories extends Component {
  state = {
    repos: []
  }

  async componentDidMount() {
    const response = await api.get('');
    this.setState({ repos: response.data })
  }

  render() {
    const { repos } = this.state;
    console.log(repos)
    return (
      <div className="container-repositories">
          <section className="grid grid-content">
            
          {/* {repos.map( repos => {
             <a href={repos.html_url} target="_blank" rel="noopener noreferrer" className="item"> 
             </a>
          })} */}
          </section>
      </div>
    );
  }
}

export default Repositories
