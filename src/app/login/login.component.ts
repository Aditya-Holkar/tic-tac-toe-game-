import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  user=new User();
  constructor(private service:LoginService,private router: Router){

  }

  loginUser() {
    this.service.loginUserfromremote().subscribe(
      data => console.log("response recieved"),
      error => console.log("exception occured")
    );
    this.gotoacount();
    }
    
    gotoacount(){
      this.router.navigate(['/acount']);
    }

}
