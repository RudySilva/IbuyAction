import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

import { IBidder } from './bidder';


@Injectable({
  providedIn: 'root'
})
export class BidderService {

}
