import { TestBed } from '@angular/core/testing';

import { QuestonsService } from './questons.service';

describe('QuestonsService', () => {
  let service: QuestonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
