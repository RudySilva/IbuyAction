import { Component, OnInit } from '@angular/core';
import { IBillingHistory } from '../billing-history';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-billing-history-list-item',
  templateUrl: './billing-history-list-item.component.html',
  styleUrls: ['./billing-history-list-item.component.css']
})
export class BillingHistoryListItemComponent implements OnInit {
  errorMessage: string;
  billingsHistory: IBillingHistory[] = [  ];

  constructor(private billingService: BillingService) {
  }

  ngOnInit(): void {
    this.billingService.getBilling().subscribe({
      next: billingsHistory => {
        this.billingsHistory = billingsHistory;
      },
      error: err => this.errorMessage = err
    });
  }
}

