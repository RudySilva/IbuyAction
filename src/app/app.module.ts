import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BidderRegistrationComponent } from './bidder/bidder-registration/bidder-registration.component';
import { BidderNumberComponent } from './bidder/bidder-number/bidder-number.component';
import { BidderUsernameComponent } from './bidder/bidder-username/bidder-username.component';
import { BillingHistoryListComponent } from './bidder/billing-history-list/billing-history-list.component';
import { BillingHistoryListItemComponent } from './bidder/billing-history-list-item/billing-history-list-item.component';
import { BidderHeaderComponent } from './bidder/bidder-header/bidder-header.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    BidderRegistrationComponent,
    BidderNumberComponent,
    BidderUsernameComponent,
    BillingHistoryListComponent,
    BillingHistoryListItemComponent,
    BidderHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
