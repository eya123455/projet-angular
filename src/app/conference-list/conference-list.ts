import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConferenceDetails } from '../conference-details/conference-details';

export interface Conference {
  name: string;
  date: string;
  location: string;
}

@Component({
  selector: 'app-conference-list',
  imports: [ConferenceDetails],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConferenceList {
  conferences: Conference[] = [
    { name: 'Créer avec Angular', date: '15 novembre 2026', location: 'Tunis, Tunisie' },
    { name: 'Interfaces réactives', date: '22 novembre 2026', location: 'Sousse, Tunisie' },
    { name: 'Les bases de Vue.js', date: '3 décembre 2026', location: 'En ligne' },
  ];

  inc() {
    alert('Votre intérêt a bien été enregistré.');
  }
}