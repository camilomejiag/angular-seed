import { TestBed, inject } from '@angular/core/testing';

import {VideoResource} from './category.resource';

describe('VideoResource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoResource]
    });
  });

  it('should be created', inject([VideoResource], (service: VideoResource) => {
    expect(service).toBeTruthy();
  }));
});
