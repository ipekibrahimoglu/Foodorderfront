import { TestBed } from '@angular/core/testing';

import { MenuItemService } from './menuitem.service';

describe('MenuItemService', () => {
  let service: MenuItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
