import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoconstruccionComponent } from './tipoconstruccion.component';

describe('TipoconstruccionComponent', () => {
  let component: TipoconstruccionComponent;
  let fixture: ComponentFixture<TipoconstruccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoconstruccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoconstruccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
