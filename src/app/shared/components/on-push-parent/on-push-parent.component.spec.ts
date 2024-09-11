import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushParentComponent } from './on-push-parent.component';

describe('OnPushParentComponent', () => {
  let component: OnPushParentComponent;
  let fixture: ComponentFixture<OnPushParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnPushParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnPushParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
