import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderNumberComponent } from './bidder-number.component';

describe('BidderNumberComponent', () => {
  let component: BidderNumberComponent;
  let fixture: ComponentFixture<BidderNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidderNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
