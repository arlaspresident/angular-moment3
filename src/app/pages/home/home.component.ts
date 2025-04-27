import { Component } from '@angular/core';
import { DagensUtmaningComponent } from '../../components/dagens-utmaning/dagens-utmaning.component';

@Component({
  selector: 'app-home',
  imports: [DagensUtmaningComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true 
})
export class HomeComponent {

}
