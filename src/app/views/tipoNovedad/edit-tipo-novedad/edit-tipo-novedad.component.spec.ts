import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipoNovedadComponent } from './edit-tipo-novedad.component';

describe('EditTipoNovedadComponent', () => {
  let component: EditTipoNovedadComponent;
  let fixture: ComponentFixture<EditTipoNovedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTipoNovedadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTipoNovedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
