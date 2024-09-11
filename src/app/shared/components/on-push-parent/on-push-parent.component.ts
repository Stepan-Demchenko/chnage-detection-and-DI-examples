import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NonPrimitive } from '../../models/non-primitive';
import { DefaultChildComponent } from '../default-child/default-child.component';
import { OnPushChildComponent } from '../on-push-child/on-push-child.component';

@Component({
  selector: 'app-on-push-parent',
  standalone: true,
  imports: [
    DefaultChildComponent,
    OnPushChildComponent
  ],
  templateUrl: './on-push-parent.component.html',
  styleUrl: './on-push-parent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushParentComponent {
  primitiveData: string = 'Primitive Data Initial State';
  nonPrimitive: NonPrimitive =  {
    text: 'Non-Primitive Data Initial State'
  };

  updatePrimitive(): void {
    this.primitiveData = 'Primitive Data Updated State';

  }

  updateNonPrimitive(): void {
    this.nonPrimitive.text = 'Non-Primitive Updated State';
  }

  referenceChangeOfNonPrimitiveData(): void {
    this.nonPrimitive = {
      text: 'New reference of Non-Primitive Updated State'
    };
  }
}
