import { TestBed } from '@angular/core/testing';

import { MeteoService } from './meteo.service';
import {HttpClientTestingModule} from '.@angular/common/http/testing'

describe('MeteoService', () => {
  let service: MeteoService;

  beforeEach(() => {
    TestBed.configureTestingModule({HttpClientTestingModule});
    service = TestBed.inject(MeteoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
