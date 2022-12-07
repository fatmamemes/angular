import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import { ListProductComponent } from './list-product/list-product.component';
import { ProductComponent } from './product/product.component';
import { HttptrainningComponent } from './httptrainning/httptrainning.component';
import {BasicService} from "./basic.service";
import {HttpClientModule} from "@angular/common/http";

export const routes: Routes = [
  // { path: 'list-product', component: ListProductComponent, data: { breadcrumb: 'list-product' } },
  {path: '', component: HttptrainningComponent, data: { breadcrumb: 'Http-training' } },
];

@NgModule({
  declarations: [
    ListProductComponent,
       ProductComponent,
       HttptrainningComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    HttpClientModule
  ],
  providers: [BasicService]
})
export class BasicsModule { }
