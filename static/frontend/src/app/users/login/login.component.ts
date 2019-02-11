import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  busy = false;

  constructor(
    private authentication: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogin() {
    this.busy = true;

    this.authentication.login(this.username, this.password)
      .then(() => {
        return this.router.navigate(['/users']);
      })
      .catch((err) => {
        console.error(err); // TODO notification
      }).then(() => {
        this.busy = false;
    });
  }
}
