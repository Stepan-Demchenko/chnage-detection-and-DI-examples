import { Component, DestroyRef, inject, Input } from '@angular/core';
import { NonPrimitive } from '../../models/non-primitive';
import { of, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-default-child',
  standalone: true,
  imports: [],
  templateUrl: './default-child.component.html',
  styleUrl: './default-child.component.scss'
})
export class DefaultChildComponent {
  @Input({required: true}) primitiveData = '';
  @Input({required: true}) nonPrimitiveData!: NonPrimitive;
  private readonly destroyRef = inject(DestroyRef);

  updateDataUsingObservable() {
    of('initial').pipe(
      tap(()=> {
        this.primitiveData = 'Updated primitive data inside Observable';
        this.nonPrimitiveData.text = 'Updated non-primitive data inside Observable'
      }),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe()
  }
}
