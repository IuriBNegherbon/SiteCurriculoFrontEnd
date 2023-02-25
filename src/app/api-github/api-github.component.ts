import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-api-github',
  templateUrl: './api-github.component.html',
  styleUrls: ['./api-github.component.css']
})
export class ApiGitHubComponent {

  username: string = '';
  userData: any = {};

  constructor(private http: HttpClient) { }

  getGithubData() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer YOUR_ACCES_TOKEN');
    this.http.get(`https://api.github.com/users/${this.username}`, { headers })
      .subscribe(data => {
        this.userData = data;
      });
  }
}