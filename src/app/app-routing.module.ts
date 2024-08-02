import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ApiGitHubComponent } from './api-github/api-github.component';
import { ControleMensalComponent } from './controle-mensal/controle-mensal.component';
import { HomeComponent } from './home/home.component';
import { MilhasComponent } from './milhas/milhas.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  // Defina suas rotas aqui
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'milhas', component: MilhasComponent },
    { path: 'apigithub', component: ApiGitHubComponent },
    { path: 'controlemensal', component: ControleMensalComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }