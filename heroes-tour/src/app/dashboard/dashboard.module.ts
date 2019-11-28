import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
