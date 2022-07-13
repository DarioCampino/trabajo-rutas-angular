import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatonsComponent } from './validatons.component';

describe('ValidatonsComponent', () => {
  let component: ValidatonsComponent;
  let fixture: ComponentFixture<ValidatonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidatonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
