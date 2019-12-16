import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BidderRegistrationComponent } from './bidder/bidder-registration/bidder-registration.component';


const routes: Routes = [
  { path: 'register',
  component: BidderRegistrationComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export default routes;

