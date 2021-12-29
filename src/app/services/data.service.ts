import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: any = {
    1000: { acno: 1000, uname: "ram", password: "1000", balance: 5000 },
    1001: { acno: 1001, uname: "ravi", password: "1001", balance: 5000 },
    1002: { acno: 1002, uname: "john", password: "1002", balance: 5000 }
  }

  constructor() { }

  register(acno: any, password: any, uname: any) {

    let db = this.users
    if (acno in db) {
      return false
    }
    else {
      db[acno] = {
        acno,
        uname,
        password,
        balance: 0
      }
      // console.log(db);
      return true

    }

  }

  login(acno:any,password:any){
    let database = this.users

    if (acno in database) {
      if (password == database[acno]["password"]) {
        return true

        // this.router.navigateByUrl('dashboard')

      }
      else {
        alert("incorrect password")
        return false
      }

    }
    else {
      alert("incorrect account number")
      return false
    }

  }

deposit(acno:any,password:any,amt:any){

  var amount = parseInt(amt)


  let db= this.users

  if (acno in db) {
    if (password==db[acno]["password"]) {
      db[acno]["balance"]=db[acno]["balance"]+amount
      return db[acno]["balance"]

      
    }
    else{
      alert("Incorrect Password!!")
      return false
    }
    
  }
  else{
    alert("account doesnt exist!!")
    return false
  }
}

}
