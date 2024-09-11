import { Component } from '@angular/core';
import { DefaultChildComponent } from '../default-child/default-child.component';
import { NonPrimitive } from '../../models/non-primitive';

@Component({
  selector: 'app-default-parent',
  standalone: true,
  imports: [
    DefaultChildComponent
  ],
  templateUrl: './default-parent.component.html',
  styleUrl: './default-parent.component.scss'
})
export class DefaultParentComponent {
  primitiveData: string = 'Primitive Data Initial State';
  nonPrimitive: NonPrimitive =  {
    text: 'Non-Primitive Data Initial State'
  };

  update(): void {
    this.primitiveData = 'Primitive Data Updated State';
    this.nonPrimitive.text = 'Non-Primitive Updated State';
  }
}
