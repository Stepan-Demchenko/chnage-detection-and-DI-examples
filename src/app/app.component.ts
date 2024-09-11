import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DefaultParentComponent } from './shared/components/default-parent/default-parent.component';
import { OnPushParentComponent } from './shared/components/on-push-parent/on-push-parent.component';
import { IndependentService } from './shared/services/independent.service';
import { ParentComponent } from './shared/components/parent/parent.component';
import { ChildComponent } from './shared/components/child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DefaultParentComponent, OnPushParentComponent, ParentComponent, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [IndependentService] // Service provided at the root component level
})
export class AppComponent {
  private independent: IndependentService = inject(IndependentService)
  title = 'test-task';
  serviceText = '';


  show(): void {
    this.serviceText = this.independent.log('Message from Root Component');
  }
}
