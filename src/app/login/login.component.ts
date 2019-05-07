import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName='Ranga'
  password=''
  loginCredentials=false;
  erroMessage='InvalidCredentials'
  router: Router;
  constructor(router:Router) { 
    this.router=router;
  }

  ngOnInit() {
  }
  handleLogin(){
    console.log(this.userName)
    console.log(this.password)
    if(this.userName==='Ranga'&&this.password=='Reddy'){
      this.loginCredentials=false;
      this.router.navigate(['welcome',this.userName])
    }else{
      this.loginCredentials=true;
      this.router.navigate(['error'])
    }
  }
}
