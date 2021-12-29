import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname = ""
  pswd = ""
  acno = ""

  constructor(private ds: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {

    var uname = this.uname
    var acno = this.acno
    var pswd = this.pswd

    let result = this.ds.register(acno, pswd, uname)

    if (result == true) {
      alert("Account registered successfully...")
      this.router.navigateByUrl("")
    }
    else {
      alert("Account Already Exists !")

    }

  }

}
