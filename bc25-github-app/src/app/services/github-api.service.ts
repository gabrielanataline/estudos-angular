import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubRepo } from '../interface/GithubRepo';
import { GithubUser } from '../interface/gitHubUser';


@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  //REQUISIÇÃO DO USUÁRIO 
  private readonly baseURL : string = 'https://api.github.com/users/'

  constructor( 
    private http: HttpClient  // objeto responsável por fazer as requisições http no Angular
  ) { } 

  procurarUsuario(userName: string){
    return this.http.get<GithubUser>(`${this.baseURL}${userName}`)
  }

  procurarRepos(username:string){
    return this.http.get<GithubRepo[]>(`${this.baseURL}${username}/repos`)
  }
        
}
