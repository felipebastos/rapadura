import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedialogComponent } from './pokedialog.component';

describe('PokedialogComponent', () => {
  let component: PokedialogComponent;
  let fixture: ComponentFixture<PokedialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokedialogComponent]
    });
    fixture = TestBed.createComponent(PokedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
