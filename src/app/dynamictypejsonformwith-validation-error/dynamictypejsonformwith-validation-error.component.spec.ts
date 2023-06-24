import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamictypejsonformwithValidationErrorComponent } from './dynamictypejsonformwith-validation-error.component';

describe('DynamictypejsonformwithValidationErrorComponent', () => {
  let component: DynamictypejsonformwithValidationErrorComponent;
  let fixture: ComponentFixture<DynamictypejsonformwithValidationErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamictypejsonformwithValidationErrorComponent]
    });
    fixture = TestBed.createComponent(DynamictypejsonformwithValidationErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
