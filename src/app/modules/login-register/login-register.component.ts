import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss'],
})
export class LoginRegisterComponent implements OnInit {
  constructor() {}

  // Two way binding
  @Input() user: User = {
    email: '',
    password: '',
  };

  ngOnInit(): void {}

  public sendData(): void {
    console.log(this.user.email);
    console.log(this.user.password);
  }
}
