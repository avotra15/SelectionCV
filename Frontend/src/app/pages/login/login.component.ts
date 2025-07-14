import { Component } from '@angular/core'; 
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email = '';
  password = '';
  error = '';

  constructor (private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        console.log('Token reçu:', res.token);
      },
      error: (err) => {
        this.error = err.error.message || 'Erreur de connexion';
        }
    })
  }
}
