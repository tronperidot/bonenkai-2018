import { TestBed, inject } from '@angular/core/testing';

import { ShuffleService } from './shuffle.service';

describe('ShuffleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShuffleService]
    });
  });

  it('should be created', inject([ShuffleService], (service: ShuffleService) => {
    expect(service).toBeTruthy();
  }));
});
