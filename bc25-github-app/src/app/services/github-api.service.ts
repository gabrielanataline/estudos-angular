import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
        
}
