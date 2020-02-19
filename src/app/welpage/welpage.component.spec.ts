import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelpageComponent } from './welpage.component';

describe('WelpageComponent', () => {
  let component: WelpageComponent;
  let fixture: ComponentFixture<WelpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
