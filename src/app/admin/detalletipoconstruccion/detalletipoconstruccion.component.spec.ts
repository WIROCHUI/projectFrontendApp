import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalletipoconstruccionComponent } from './detalletipoconstruccion.component';

describe('DetalletipoconstruccionComponent', () => {
  let component: DetalletipoconstruccionComponent;
  let fixture: ComponentFixture<DetalletipoconstruccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalletipoconstruccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalletipoconstruccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
