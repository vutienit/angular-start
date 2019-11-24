import { TestBed } from '@angular/core/testing';

import { AlbumImageService } from './album-image.service';

describe('AlbumImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlbumImageService = TestBed.get(AlbumImageService);
    expect(service).toBeTruthy();
  });
});
