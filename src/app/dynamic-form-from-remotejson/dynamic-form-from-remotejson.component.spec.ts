import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormFromRemotejsonComponent } from './dynamic-form-from-remotejson.component';

describe('DynamicFormFromRemotejsonComponent', () => {
  let component: DynamicFormFromRemotejsonComponent;
  let fixture: ComponentFixture<DynamicFormFromRemotejsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormFromRemotejsonComponent]
    });
    fixture = TestBed.createComponent(DynamicFormFromRemotejsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
