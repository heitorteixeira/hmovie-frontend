import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';

@NgModule({
  declarations: [DashboardListComponent, DashboardDetailComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    InfiniteScrollModule
  ]
})
export class DashboardModule { }
