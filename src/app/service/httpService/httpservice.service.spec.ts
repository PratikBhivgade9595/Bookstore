import { TestBed } from '@angular/core/testing';

import { HttpserviceService } from './httpservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HttpserviceService', () => {
  let service: HttpserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(HttpserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
