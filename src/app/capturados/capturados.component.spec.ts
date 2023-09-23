import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturadosComponent } from './capturados.component';

describe('Pagina2Component', () => {
  let component: CapturadosComponent;
  let fixture: ComponentFixture<CapturadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapturadosComponent],
    });
    fixture = TestBed.createComponent(CapturadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
