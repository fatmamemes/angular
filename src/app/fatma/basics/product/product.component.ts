import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {
  @Input() product: any;
  @Input() productCount: any;
  @Output() selectProduct: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectProduct2: EventEmitter<any> = new EventEmitter<any>();
  private countr = 0;
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit', this.productCount)
  }
  changeProduct(value){
    this.selectProduct.emit(this.product);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

}
