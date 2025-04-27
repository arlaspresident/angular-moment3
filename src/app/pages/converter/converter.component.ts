import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  imports: [FormsModule],
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
  standalone: true 
})
export class ConverterComponent {
  meters = 0;
  feet = 0;

  celsius = 0;
  fahrenheit = 0;

  convertToFeet() {
    this.feet = parseFloat((this.meters * 3.28084).toFixed(2));
  }

  convertToMeters() {
    this.meters = parseFloat((this.feet / 3.28084).toFixed(2));
  }

  convertToFahrenheit() {
    this.fahrenheit = parseFloat(((this.celsius * 9 / 5) + 32).toFixed(2));
  }

  convertToCelsius() {
    this.celsius = parseFloat(((this.fahrenheit - 32) * 5 / 9).toFixed(2));
  }
}
