import { Component } from '@angular/core';
import { environment } from '@env/*';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '404 not found';
  urlImage = environment.assets + 'assets/images/Scarecrow.png';
}
