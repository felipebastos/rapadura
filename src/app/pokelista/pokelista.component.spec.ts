import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokelistaComponent } from './pokelista.component';

describe('PokelistaComponent', () => {
  let component: PokelistaComponent;
  let fixture: ComponentFixture<PokelistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokelistaComponent]
    });
    fixture = TestBed.createComponent(PokelistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
