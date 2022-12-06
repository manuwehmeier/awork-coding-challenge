import { TestBed } from '@angular/core/testing';

import { MoviesRemoteService } from './movies-remote.service';

describe('MoviesService', () => {
  let service: MoviesRemoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesRemoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
