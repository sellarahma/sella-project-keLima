/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShoppingListSellaaService } from './shopping-listSella.service';

describe('Service: ShoppingListSella', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingListSellaService]
    });
  });

  it('should ...', inject([ShoppingListSellaService], (service: ShoppingListSellaService) => {
    expect(service).toBeTruthy();
  }));
});
