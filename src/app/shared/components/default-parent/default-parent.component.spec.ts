import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultParentComponent } from './default-parent.component';

describe('DefaultParentComponent', () => {
  let component: DefaultParentComponent;
  let fixture: ComponentFixture<DefaultParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
