import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  nom = 'Eya';

  bonjour() {
    alert(`Bonjour ${this.nom} !`);
  }

  nom1 = 'Amen';
  students = ['Ahmed', 'Ali', 'Amine', 'Aymen', 'Anis'];
  students2 = [
    { name: 'Ahmed', age: 20 },
    { name: 'Ali', age: 21 },
    { name: 'Amine', age: 22 },
    { name: 'Aymen', age: 23 },
    { name: 'Anis', age: 24 },
  ];

  count = 0;
  counts = signal(0);

  incrementSimple() {
    this.count++;
  }

  increment() {
    this.counts.update(v => v + 1);
  }
}