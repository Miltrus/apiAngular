import { TestBed } from '@angular/core/testing';

import { TipoNovedadService } from './tipo-novedad.service';

describe('TipoNovedadService', () => {
  let service: TipoNovedadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoNovedadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
