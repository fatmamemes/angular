import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  list = [];
  productCount = 0;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.list = [
        {name: 'prod1',price: 50, note: '....'},
        {name: 'prod2',price: 100, note: '******'},
      ]
    }, 2000)
  }

  changeInput(value: any) {
    console.log(value)
  }

  changeProduct($event: any) {
    console.log($event)
  }
}
