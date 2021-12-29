import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Best Bank"

  accno = "Account Number Please"

  acno = ""

  pswd = ""

  

  constructor(private router: Router, private ds: DataService) { }

  ngOnInit(): void {
  }

  acnoChange(event: any) {
    this.acno = event.target.value
    // console.log(this.acno);


  }

  pswdChange(event: any) {
    this.pswd = event.target.value
    // console.log(this.pswd);


  }


  login() {
    var acno = this.acno
    var password = this.pswd
    // let database = this.ds.users

    let result= this.ds.login(acno,password)

    if(result){
      alert("login successful")
      this.router.navigateByUrl('dashboard')
    }


  }

  // login(a:any,p:any){
  //   var acno = a.value
  //   var password = p.value
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

}
