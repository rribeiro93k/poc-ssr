import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoinListService } from './coin-list.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css']
})
export class CoinListComponent implements OnInit {

  constructor(
    private service: CoinListService,
    private router: Router
  ) { }

  list!: { bid: string }[];

  ngOnInit(): void {
    this.fetchAPI();
  }

  navigateBack(): void {
    this.router.navigateByUrl('');
  }

  private fetchAPI(): void {
    this.service.get()
      .subscribe(resp => {
        console.log('resp', resp);
        this.list = resp;
      })
  }
}
