import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegService } from '../reg.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
   
  }
user=new User();
  constructor(private service:RegService,private router: Router){

  }
  registerUser(){
this.service.registerUserfromremote(this.user).subscribe(
data => console.log("response recieved"),
error => console.log("exception occured")
);
this.gotoList();
  }
  gotoList(){
    this.router.navigate(['/login']);
  }


}
