import { TestBed } from '@angular/core/testing';

import { UserserviceService } from './userservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserserviceService', () => {
  let service: UserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(UserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
