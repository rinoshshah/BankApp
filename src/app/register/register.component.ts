import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  registerForm=this.fb.group({
    uname :[''],
    pswd :[''],
    acno :['']

  })

  constructor(private ds: DataService, private router: Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register() {

    
    console.log(this.registerForm);
    
    var uname = this.registerForm.value.uname
    var acno = this.registerForm.value.acno
    var pswd = this.registerForm.value.pswd

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
