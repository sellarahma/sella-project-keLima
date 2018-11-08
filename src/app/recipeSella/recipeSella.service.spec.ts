/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecipeSellaService } from './recipeSella.service';

describe('Service: RecipeSella', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeSellaService]
    });
  });

  it('should ...', inject([RecipeSellaService], (service: RecipeSellaService) => {
    expect(service).toBeTruthy();
  }));
});
