import { Component } from '@angular/core';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { HomeComponent } from './componenets/home/home.component';
import { FooterComponent } from './componenets/footer/footer.component';

@Component({
  selector: 'app-root',
  //standalone: true,
  imports: [NavbarComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent  {

}
