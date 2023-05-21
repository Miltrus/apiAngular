import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTipoNovedadComponent } from './new-tipo-novedad.component';

describe('NewTipoNovedadComponent', () => {
  let component: NewTipoNovedadComponent;
  let fixture: ComponentFixture<NewTipoNovedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTipoNovedadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTipoNovedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
