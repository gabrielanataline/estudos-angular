import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GithubUser } from './interface/gitHubUser';
import { GithubApiService } from './services/github-api.service';
import { GithubRepo } from './interface/GithubRepo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  githubForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]]
  })

  gUser!: GithubUser
  repos: GithubRepo[]= []

  constructor(
    private fb: FormBuilder,
    private gitHubService: GithubApiService,
    private snackBar: MatSnackBar
  ) { }

  procurar() {
    const username = this.githubForm.get('username')?.value  //recuperando o nome do usuário que deve ser procurado



    this.gitHubService.procurarUsuario(username).subscribe(
      (user) => {
        this.gUser = user
      },
      (erro) => {
        if (erro instanceof HttpErrorResponse) {
          if (erro.status == 404) {
            this.snackBar.open(`O usuário ${username} não foi encontrado`, 'Ok')
          }
        }
      }
    )

    this.gitHubService.procurarRepos(username).subscribe(
      (repos) => {
        this.repos=repos

      }
    )
  }
}
