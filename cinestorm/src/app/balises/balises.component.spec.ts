import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalisesComponent } from './balises.component';

describe('BalisesComponent', () => {
  let component: BalisesComponent;
  let fixture: ComponentFixture<BalisesComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BalisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
