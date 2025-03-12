import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserFormComponent } from '../user-form-component/user-form.component';
import { userInfo } from '../models/user.model.interface';
import { UserService } from '../service/user.service';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'user-dashboard-component',
  templateUrl: './user-dashboard-component.component.html',
  styleUrls: ['./user-dashboard-component.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  adminrole = 0;
  editorRole = 0;
  viewerRole = 0;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  closeResult: string = '';
  rows: userInfo[] = [];
  columns = [{ name: 'Name' }, { name: 'Email' }, { name: 'Role' }];
  roles: any = [];

  public pieChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  public pieChartData: ChartData<'pie', number[], string | string[]>;
  public pieChartType: ChartType = 'pie';

  constructor(
    private modalService: NgbModal,
    private userService: UserService
  ) {
    this.userService.getData().subscribe((res: userInfo[]) => {
      this.rows = [...res];
    });
    this.rows.map((item) => {
      if (item.role == 'admin') {
        this.adminrole += 1;
      } else if (item.role == 'editor') {
        this.editorRole += 1;
      } else {
        this.viewerRole += 1;
      }
    });
    this.roles = [this.adminrole, this.editorRole, this.viewerRole];
    this.pieChartData = {
      labels: ['Admin', 'Editor', 'Viewer'],
      datasets: [
        {
          data: this.roles,
        },
      ],
    };
  }

  ngOnInit(): void {}

  onBtnOpenModal() {
    this.modalService
      .open(UserFormComponent, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Closed with: ${reason}`;
        }
      );
  }
}
