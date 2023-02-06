import { Component } from '@angular/core';
import { ItemService } from '../service/item.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminitems',
  templateUrl: './adminitems.component.html',
  styleUrls: ['./adminitems.component.css']
})
export class AdminitemsComponent {
  itemdata: any;
  constructor(private ItemService: ItemService, private httpClient: HttpClient){}

  ngOnInit(){
    this.ItemService.GetItem().subscribe((response: any) =>{
      console.log(response);
      this.itemdata=response;
    })
  }
}
