import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { DashboardComponent } from './customer-components/dashboard/dashboard.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatGridListModule,
    MatFormField,MatLabel,MatError,FormsModule,ReactiveFormsModule,HttpClientModule,MatInputModule,MatFormFieldModule
  ]
})
export class CustomerModule { }
