import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserFormComponent } from './user-form-component/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UserDashboardComponent } from './user-dashboard-component/user-dashboard-component.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [UserDashboardComponent, UserFormComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    UserDashboardRoutingModule,
    NgChartsModule,
  ],
  entryComponents: [UserFormComponent],
})
export class UserDashboardModule {}
