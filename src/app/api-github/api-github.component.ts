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
  userError: any = {};
  privateToken: string = '';
  followers: any[] = [];

  constructor(private http: HttpClient) { }

  getGithubData() {
    let headers = {};

    if (this.privateToken) {
      headers = new HttpHeaders().set('Authorization', `Bearer ${this.privateToken}`);
    }
    this.http.get(`https://api.github.com/users/${this.username}`, { headers })
      .subscribe(data => {
        this.userData = data;
        if (this.userData) {  
          this.getFollowers();
        }
      },
      (error) => {
        this.userError = error.error;
      });
  }

  getFollowers() {
    this.http.get<any[]>(this.userData.followers_url).subscribe((data: any[]) => {
      this.followers = data;
    });
  }
}