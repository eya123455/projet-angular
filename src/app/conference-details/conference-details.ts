import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import type { Conference } from '../conference-list/conference-list';

@Component({
  selector: 'app-conference-details',
  imports: [],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConferenceDetails {
  conference = input<Conference>({ name: '', date: '', location: '' });
  increment = output<void>();

  inc() {
    this.increment.emit();
  }
}
