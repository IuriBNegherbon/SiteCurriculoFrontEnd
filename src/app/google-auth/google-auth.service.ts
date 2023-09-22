import { Injectable } from '@angular/core';

declare const gapi: any; // Declare gapi as a global variable

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  private initialized = false;

  initializeGoogleSignIn(clientId: string): Promise<void> {
    if (this.initialized) {
      return Promise.resolve();
    }

    return new Promise<void>((resolve, reject) => {
      gapi.load('auth2', () => {
        gapi.auth2.init({
          client_id: clientId,
        }).then(() => {
          this.initialized = true;
          resolve();
        }, (error: any) => {
          reject(error);
        });
      });
    });
  }

  // Adicione o método signInWithGoogle
  signInWithGoogle(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.signIn().then((googleUser: any) => {
        resolve(googleUser);
      }).catch((error: any) => {
        reject(error);
      });
    });
  }
}
