import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { FormFieldComponent } from '../form-field/form-field.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    TitleComponent,
    FormFieldComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
