import { Component, inject } from '@angular/core';
import { IndependentService } from '../../services/independent.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  private readonly independentService = inject(IndependentService);
  serviceText = '';


  show() {
    this.serviceText = this.independentService.log('Show From ChildComponent');
  }
}
