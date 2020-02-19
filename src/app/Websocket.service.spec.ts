import { TestBed } from '@angular/core/testing';

import { WebSocketService } from './Websocket.service';

describe(' WebSocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service:  WebSocketService = TestBed.get( WebSocketService);
    expect(service).toBeTruthy();
  });
});
