import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from '../google-auth/google-auth.service';

declare const gapi: any; // Declare a global variable for gapi

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private googleAuthService: GoogleAuthService) {}

  ngOnInit() {
    this.googleAuthService.initializeGoogleSignIn('1074988463940-ajlh58h35fegn4l91i4jchivc9cg803e.apps.googleusercontent.com')
      .then(() => {
        // O Google Sign-In está inicializado com sucesso, agora você pode usar o gapi.auth2
      })
      .catch((error: any) => {
        console.error('Erro ao inicializar o Google Sign-In:', error);
      });
  }

  onGoogleSignIn() {
    // Iniciar a autenticação com o Google
    this.googleAuthService.signInWithGoogle()
      .then((user: any) => {
        // A autenticação com o Google foi bem-sucedida, você pode lidar com o usuário autenticado aqui
        console.log('Usuário autenticado com sucesso:', user);
      })
      .catch((error: any) => {
        // Tratar erros de autenticação do Google aqui
        console.error('Erro durante a autenticação com o Google:', error);
      });
  }
}
