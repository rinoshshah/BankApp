import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Best Bank"

  accno="Account Number Please"

  users={
    1000:{acno:1000,uname:"ram",password:"1000",balance:5000},
    1001:{acno:1001,uname:"ravi",password:"1001",balance:5000},
    1002:{acno:1002,uname:"john",password:"1002",balance:5000}
  }

  constructor() { }

  ngOnInit(): void {
  }

  acnoChange(){
    
  }


  login(){
    alert("login clicked")
  }

}
