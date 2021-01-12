export interface iPerfil{
  user: {
    bio: string,
    avatar_url: string
  }
}

export interface iRepositories{
  repo: [{
    name : string,
    html_url: string,
    description: string
  }]
}