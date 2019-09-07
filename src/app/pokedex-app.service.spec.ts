import { TestBed } from '@angular/core/testing';

import { PokedexAppService } from './pokedex-app.service';

describe('PokedexAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokedexAppService = TestBed.get(PokedexAppService);
    expect(service).toBeTruthy();
  });
});
