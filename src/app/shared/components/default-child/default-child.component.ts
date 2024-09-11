import { Component, Input, OnDestroy } from '@angular/core';
import { NonPrimitive } from '../../models/non-primitive';
import { of, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-default-child',
  standalone: true,
  imports: [],
  templateUrl: './default-child.component.html',
  styleUrl: './default-child.component.scss'
})
export class DefaultChildComponent implements OnDestroy {
  @Input({required: true}) primitiveData = '';
  @Input({required: true}) nonPrimitiveData!: NonPrimitive;
  private readonly unsubscribe = new Subject<unknown>();

  updateDataUsingObservable() {
    of('initial').pipe(
      tap(()=> {
        this.primitiveData = 'Updated primitive data inside Observable';
        this.nonPrimitiveData.text = 'Updated non-primitive data inside Observable'
      }),
      takeUntil(this.unsubscribe)
    ).subscribe()
  }

  ngOnDestroy() {
    this.unsubscribe.next(null);
    this.unsubscribe.complete();
  }
}
