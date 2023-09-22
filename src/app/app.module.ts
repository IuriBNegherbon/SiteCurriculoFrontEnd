import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MilhasComponent } from './milhas/milhas.component';
import { LoginComponent } from './login/login.component';
import { ApiGitHubComponent } from './api-github/api-github.component';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider, 
} from '@abacritt/angularx-social-login';

//import { SocialLoginModule } from '@abacritt/angularx-social-login';
@NgModule({ imports: [ SocialLoginModule ] }) export class AuthModule {}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    NavbarComponent,
    MilhasComponent,
    LoginComponent,
    ApiGitHubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    RouterModule.forRoot([ // Adicione as rotas aqui
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'milhas', component: MilhasComponent },
      { path: 'apigithub', component: ApiGitHubComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', component: NotFoundComponent }
    ]),
    NgxMaskDirective, NgxMaskPipe
  ],
  providers: [provideNgxMask(),
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              'clientId'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
