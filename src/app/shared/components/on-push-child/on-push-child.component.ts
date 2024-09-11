import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, Input } from '@angular/core';
import { NonPrimitive } from '../../models/non-primitive';
import { of, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-on-push-child',
  standalone: true,
  imports: [],
  templateUrl: './on-push-child.component.html',
  styleUrl: './on-push-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushChildComponent {
  @Input({required: true}) primitiveData = '';
  @Input({required: true}) nonPrimitiveData!: NonPrimitive;
  private readonly destroyRef = inject(DestroyRef);
  private readonly cdr = inject(ChangeDetectorRef);


  updateInsideObservable() {
    of('initial').pipe(
      tap(()=> {
        this.primitiveData = 'Updated primitive data inside Observable';
        this.nonPrimitiveData.text = 'Updated non-primitive data inside Observable'
      }),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe()
  }

  mutatePrimitiveDataWithManualTriggerOfChangeDetection(): void {
    this.nonPrimitiveData.text = 'Mutating non primitive data with Manual Trigger';
    this.cdr.markForCheck();
  }
}
