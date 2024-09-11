import { Component, inject } from '@angular/core';
import { IndependentService } from '../../services/independent.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  providers: [IndependentService] // Service provided at the parent component level
})
export class ParentComponent {
  independentService = inject(IndependentService);
  serviceText = '';

  show() {
    this.serviceText = this.independentService.log('Message from Parent Component')
  }
}
