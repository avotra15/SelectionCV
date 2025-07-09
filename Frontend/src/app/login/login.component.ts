import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [LoginComponent, RouterModule],
  //template: `<app-login></app-login>`
})
export class LoginComponent {

}
