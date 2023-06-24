import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamictypejsonformComponent } from './dynamictypejsonform.component';

describe('DynamictypejsonformComponent', () => {
  let component: DynamictypejsonformComponent;
  let fixture: ComponentFixture<DynamictypejsonformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamictypejsonformComponent]
    });
    fixture = TestBed.createComponent(DynamictypejsonformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
