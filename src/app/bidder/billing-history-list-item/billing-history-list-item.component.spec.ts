import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingHistoryListItemComponent } from './billing-history-list-item.component';

describe('BillingHistoryListItemComponent', () => {
  let component: BillingHistoryListItemComponent;
  let fixture: ComponentFixture<BillingHistoryListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingHistoryListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingHistoryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
