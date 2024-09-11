import { Component, inject } from '@angular/core';
import { SingletonService } from '../../services/singleton.service';

@Component({
  selector: 'app-child-1',
  standalone: true,
  imports: [],
  templateUrl: './child-1.component.html',
  styleUrl: './child-1.component.scss'
})
export class Child1Component {
  private readonly singletonService = inject(SingletonService);
  serviceText = '';


  show() {
    this.serviceText = this.singletonService.log('Show From Child1Component');
  }
}
