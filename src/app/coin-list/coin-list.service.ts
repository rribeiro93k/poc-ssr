import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable()
export class CoinListService {

  constructor(private http: HttpClient) { }

  get(): Observable<{ bid: string }[]> {

    return this.http.get<{ bid: string }[]>('https://economia.awesomeapi.com.br/json/daily/USD-BRL/15')
      .pipe(map(resp => resp as { bid: string }[]));

  }

}
