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
import { ApiGitHubComponent } from './api-github/api-github.component';
import { ControleMensalComponent } from './controle-mensal/controle-mensal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    NavbarComponent,
    MilhasComponent,
    ApiGitHubComponent,
    ControleMensalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([ // Adicione as rotas aqui
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'milhas', component: MilhasComponent },
      { path: 'apigithub', component: ApiGitHubComponent },
      { path: 'controlemensal', component: ControleMensalComponent },
      { path: '**', component: NotFoundComponent }
    ]),
    NgxMaskDirective, NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }