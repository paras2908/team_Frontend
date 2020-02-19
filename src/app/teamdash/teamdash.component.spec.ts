import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamdashComponent } from './teamdash.component';

describe('TeamdashComponent', () => {
  let component: TeamdashComponent;
  let fixture: ComponentFixture<TeamdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
