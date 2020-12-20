import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleviviendaComponent } from './detallevivienda.component';

describe('DetalleviviendaComponent', () => {
  let component: DetalleviviendaComponent;
  let fixture: ComponentFixture<DetalleviviendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleviviendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleviviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
