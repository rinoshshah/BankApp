import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Best Bank"

  accno="Account Number Please"

  acno=""

  pswd=""

  users:any={
    1000:{acno:1000,uname:"ram",password:"1000",balance:5000},
    1001:{acno:1001,uname:"ravi",password:"1001",balance:5000},
    1002:{acno:1002,uname:"john",password:"1002",balance:5000}
  }

  constructor() { }

  ngOnInit(): void {
  }

  acnoChange(event:any){
    this.acno=event.target.value
    // console.log(this.acno);
    
    
  }

  pswdChange(event:any){
    this.pswd=event.target.value
    // console.log(this.pswd);
    

  }


  // login(){
  //   var acno = this.acno
  //   var password = this.pswd
  //   let database = this.users

  //   if(acno in database){
  //     if(password==database[acno]["password"]){
  //       alert("login successful")
        
  //     }
  //     else{
  //       alert("incorrect password")
  //     }

  //   }
  //   else{
  //     alert("incorrect account number")
  //   }

    
  // }

  login(a:any,p:any){
    var acno = a.value
    var password = p.value
    let database = this.users

    if(acno in database){
      if(password==database[acno]["password"]){
        alert("login successful")
        
      }
      else{
        alert("incorrect password")
      }

    }
    else{
      alert("incorrect account number")
    }

    
  }

}
