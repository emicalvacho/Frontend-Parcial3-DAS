import { TestBed } from '@angular/core/testing';

import { UsuariosResourceService } from './usuarios-resource.service';

describe('UsuariosResourceService', () => {
  let service: UsuariosResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
