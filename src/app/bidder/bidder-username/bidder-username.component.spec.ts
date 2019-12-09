import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderUsernameComponent } from './bidder-username.component';

describe('BidderUsernameComponent', () => {
  let component: BidderUsernameComponent;
  let fixture: ComponentFixture<BidderUsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidderUsernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
