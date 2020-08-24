import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { DataTableService } from './data-table.service';



@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    DataTableComponent
  ],
  providers: [
    DataTableService
  ]
})
export class DataTableModule { }
