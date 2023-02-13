import { Component } from '@angular/core';
import { OrdersService } from '../service/orders.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminorders',
  templateUrl: './adminorders.component.html',
  styleUrls: ['./adminorders.component.css']
})
export class AdminordersComponent {
  ordersdata: any;
  constructor(private OrderService:OrdersService, private httpClient: HttpClient){}

  ngOnInit(){
    this.GetOrder();
  }

  GetOrder(){
    this.OrderService.GetAllOrder().subscribe((response: any)=>{
      console.log(response);
      this.ordersdata = response;
    });
  }
}
