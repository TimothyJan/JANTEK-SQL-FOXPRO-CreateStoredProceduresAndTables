import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    TitleComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
