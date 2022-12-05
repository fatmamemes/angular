import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import { ListProductComponent } from './list-product/list-product.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  { path: 'list-product', component: ListProductComponent, data: { breadcrumb: 'list-product' } },
];

@NgModule({
  declarations: [
    ListProductComponent,
       ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class BasicsModule { }
