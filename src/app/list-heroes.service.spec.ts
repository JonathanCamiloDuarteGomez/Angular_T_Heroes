import { TestBed } from '@angular/core/testing';

import { ListHeroesService } from './list-heroes.service';

describe('ListHeroesService', () => {
  let service: ListHeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListHeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
