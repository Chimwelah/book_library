import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class LoginComponent {
  loginobj: any = {
    username: '',
    password: ''
  };

  constructor(private router: Router) {}

  onlogin() {
    if (this.loginobj.username === 'admin' && this.loginobj.password === '334455') {
      this.router.navigateByUrl('/');
    } else {
      alert('wrong credentials');
    }
  }
}
