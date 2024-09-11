import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultChildComponent } from './default-child.component';

describe('DefaultChildComponent', () => {
  let component: DefaultChildComponent;
  let fixture: ComponentFixture<DefaultChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
