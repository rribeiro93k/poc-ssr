import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  show = false;
  text = 'Hello o/';

  dolar = '...';

  ngOnInit() {
    this.fetchAPI();
  }

  toggle(): void {
    this.show = !this.show;
  }

  private fetchAPI(): void {

    // Ref.: https://docs.awesomeapi.com.br/api-de-moedas
    fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
    .then(response => response.json())
    .then(response => {
      this.dolar = `$ ${response?.USDBRL?.bid}`;
    })
  }

}
