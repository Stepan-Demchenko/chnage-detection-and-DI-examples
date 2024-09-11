import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DefaultParentComponent } from './shared/components/default-parent/default-parent.component';
import { OnPushParentComponent } from './shared/components/on-push-parent/on-push-parent.component';
import { IndependentService } from './shared/services/independent.service';
import { ParentComponent } from './shared/components/parent/parent.component';
import { ChildComponent } from './shared/components/child/child.component';
import { SingletonService } from './shared/services/singleton.service';
import { Parent1Component } from './shared/components/parent-1/parent-1.component';
import { Child1Component } from './shared/components/child-1/child-1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DefaultParentComponent, OnPushParentComponent, ParentComponent, ChildComponent, Parent1Component, Child1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [IndependentService] // Service provided at the root component level
})
export class AppComponent {
  private independent: IndependentService = inject(IndependentService);
  private readonly singleTonService = inject(SingletonService);
  title = 'test-task';
  independentServiceText = '';
  singleTonServiceText = '';


  show(): void {
    this.independentServiceText = this.independent.log('Message from Root Component');
  }

  showFromSingleTonService(): void {
    this.singleTonServiceText = this.singleTonService.log('Message from Root Component');
  }
}
