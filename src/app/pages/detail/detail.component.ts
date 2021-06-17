import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coin } from "../../interface/detail-coin";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  coinId:string | null = '';

  ngOnInit(){
    this.coinId = this.route.snapshot.paramMap.get('id');
  }

}
