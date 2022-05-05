import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getCurrency(currency:string){
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=$(currency)&order-market_cap_desc&sparkline=false`)
  }
  getTrendingCurrency(){
    return this.http.get<any>(``)
  }
  getGraphicaCurrencylData(){}
  getCurrencyById(){}
}
