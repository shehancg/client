import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/service/item.service'

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit{
  createItemForm!: FormGroup;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.createItemForm = new FormGroup({
      name: new FormControl('name', [Validators.required]),
      description: new FormControl('description', [Validators.required]),
      image: new FormControl('image'),
      price: new FormControl('price', [Validators.required]),
      countInStock: new FormControl('countInStock', [Validators.required])
    });
  }

  itemSubmit() {
    const item = this.createItemForm.value;
    this.itemService.CreateItem(item)
      .subscribe(data => {
        console.log('Item created successfully');
      }, (error: any) => {
        console.error('Error creating item:', error);
      });
  }
}
