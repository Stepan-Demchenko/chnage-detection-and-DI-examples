import { Component, inject } from '@angular/core';
import { SingletonService } from '../../services/singleton.service';

@Component({
  selector: 'app-parent-1',
  standalone: true,
  imports: [],
  templateUrl: './parent-1.component.html',
  styleUrl: './parent-1.component.scss'
})
export class Parent1Component {
  singletonService = inject(SingletonService);
  serviceText = '';

  show() {
    this.serviceText = this.singletonService.log('Message from Parent1Component')
  }
}
