import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/app/DTO/login-user';
import { AuthenticationService } from 'src/app/Service/authentication.service.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup( {
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  loginAccount: LoginUser;

  constructor(private authservice: AuthenticationService,
              private router: Router) {
    this.loginAccount = new LoginUser();
  }

  ngOnInit() {
  }

  onSubmit() {    
    this.loginAccount.username = this.loginForm.value.username!;
    this.loginAccount.password = this.loginForm.value.password!;
    this.authservice.login(this.loginAccount).subscribe( (response: any) => {
      console.log(response!); 
      sessionStorage.setItem('token', response.token!); 
      this.router.navigate(['/players']); 
    });
  }
}
