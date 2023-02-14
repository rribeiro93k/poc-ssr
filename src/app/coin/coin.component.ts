import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  currentQuotation = '...';

  ngOnInit() {
    this.fetchAPI();
  }

  navigateToList(): void {
    this.router.navigateByUrl('coin-list');
  }

  private fetchAPI(): void {
    this.http.get('https://economia.awesomeapi.com.br/json/last/USD-BRL')
      .pipe(map(resp => resp as { USDBRL: { bid: string } }))
      .subscribe(resp => {
        console.log('resp', resp);
        this.currentQuotation = `R$ ${resp?.USDBRL?.bid}`;
      });
  }

}
