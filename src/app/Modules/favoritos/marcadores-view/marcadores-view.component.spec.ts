import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcadoresViewComponent } from './marcadores-view.component';

describe('MarcadoresViewComponent', () => {
  let component: MarcadoresViewComponent;
  let fixture: ComponentFixture<MarcadoresViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcadoresViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcadoresViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
