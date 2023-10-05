import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoketextComponent } from './poketext.component';

describe('PoketextComponent', () => {
  let component: PoketextComponent;
  let fixture: ComponentFixture<PoketextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoketextComponent]
    });
    fixture = TestBed.createComponent(PoketextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
