/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InventionsService } from './inventions.service';

describe('InventionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InventionsService]
    });
  });

  it('should ...', inject([InventionsService], (service: InventionsService) => {
    expect(service).toBeTruthy();
  }));
});
