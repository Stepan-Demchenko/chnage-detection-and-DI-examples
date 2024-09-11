import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, OnDestroy } from '@angular/core';
import { NonPrimitive } from '../../models/non-primitive';
import { of, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-on-push-child',
  standalone: true,
  imports: [],
  templateUrl: './on-push-child.component.html',
  styleUrl: './on-push-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushChildComponent implements OnDestroy {
  @Input({required: true}) primitiveData = '';
  @Input({required: true}) nonPrimitiveData!: NonPrimitive;
  private readonly unsubscribe = new Subject<unknown>();
  private readonly cdr = inject(ChangeDetectorRef);


  updateInsideObservable() {
    of('initial').pipe(
      tap(()=> {
        this.primitiveData = 'Updated primitive data inside Observable';
        this.nonPrimitiveData.text = 'Updated non-primitive data inside Observable'
      }),
      takeUntil(this.unsubscribe)
    ).subscribe()
  }

  mutatePrimitiveDataWithManualTriggerOfChangeDetection(): void {
    this.nonPrimitiveData.text = 'Mutating non primitive data with Manual Trigger';
    this.cdr.markForCheck();
  }

  ngOnDestroy() {
    this.unsubscribe.next(null);
    this.unsubscribe.complete();
  }
}
