import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CoinInfo } from "../interface/coin-info";
import { CoinPrice } from "../interface/coin-price";

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) { }

  public coinID: string[] = [];

  async getCoins() {
    await ((this.http.get("https://api.coinpaprika.com/v1/coins/").subscribe(data => {
        for(let i = 0; i <= 500; i++){ //Just 100 Results
          // @ts-ignore
          this.coinID.push((data[i].id));
        }
      }
    )));
   return this.coinID;
  }

  async getCoinInfoById(id: string | null) {
    return await ((this.http.get<CoinInfo>("https://api.coinpaprika.com/v1/coins/" + id).toPromise()));
  }

  async getCoinMarketDataById(id: string | null){
    return await ((this.http.get<CoinPrice>("https://api.coinpaprika.com/v1/tickers/" + id).toPromise()));
  }
}
