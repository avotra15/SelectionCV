import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    ($('.selectpicker') as any).selectpicker();
  }
}
