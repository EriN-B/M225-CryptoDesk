import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinInfo } from "../../interface/coin-info";
import { CoinPrice } from "../../interface/coin-price";
import { CoinService } from "../../services/coin.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  coinId:string | null = '';
  // @ts-ignore
  public _coinInfo: CoinInfo;
  // @ts-ignore
  public _coinMarketPrice: CoinPrice;

  get coinInfo(): CoinInfo {
    return this._coinInfo;
  }

  set coinInfo(value: CoinInfo) {
    this._coinInfo = value;
  }

  get coinMarketPrice(): CoinPrice {
    return this._coinMarketPrice;
  }

  set coinMarketPrice(value: CoinPrice) {
    this._coinMarketPrice = value;
  }

  constructor(public route:ActivatedRoute,public coinService: CoinService) { }

  ngOnInit(){
    this.coinId = this.route.snapshot.paramMap.get('id');
    this.getCoinInfoById();
    this.getCoinMarketDataById();
  }

   async getCoinInfoById(){
    await this.coinService.getCoinInfoById(this.coinId).then((data =>{
      this.coinInfo = data;
    }));
  }

  async getCoinMarketDataById(){
    await this.coinService.getCoinMarketDataById(this.coinId).then((data =>{
      this.coinMarketPrice = data;;
    }));
  }

  removeDecimal(number: number):string{
    return (Math.round(number * 100) / 100).toFixed(2);
  }
}
