import { TestBed } from '@angular/core/testing';

import { DataTransactionService } from './data-transaction.service';

describe('DataTransactionService', () => {
  let service: DataTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
