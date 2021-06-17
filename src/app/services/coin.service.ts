import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) { }

  public coinID: string[] = [];

  async getCoins() {
    await ((this.http.get("https://api.coinpaprika.com/v1/coins/").subscribe(data => {
        for(let i = 0; i <= 100; i++){
          // @ts-ignore
          this.coinID.push((data[i].id));
        }
      }
    )));
   return this.coinID;
  }

  async getCoinById(CoinId: string) {

  }

}
