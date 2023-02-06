import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ItemService } from '../service/item.service'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  itemdata: any;
  constructor(private ItemService: ItemService, private httpClient: HttpClient){}

  ngOnInit(){
    this.ItemService.GetItem().subscribe((response: any) =>{
      console.log(response);
      this.itemdata=response;
    })
  }
}
