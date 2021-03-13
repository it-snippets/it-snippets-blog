import { TestBed, inject } from '@angular/core/testing';
import { HomeHttpService } from './home-http.service';

describe('Service: HomeHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeHttpService]
    });
  });

  it('should ...', inject([HomeHttpService], (service: HomeHttpService) => {
    expect(service).toBeTruthy();
  }));
});
