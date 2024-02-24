import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  cars: any = [];
  isModalVisible = false;
  carIdToDelete: number | null = null;
  isConfirmLoading = false;

  constructor(
    private adminService: AdminService,
    private message: NzMessageService,
    private modalService: NzModalService
  ) { }

  ngOnInit() {
    this.getAllCars();
  }

  getAllCars() {
    this.adminService.getAllCars().subscribe((res) => {
      console.log(res);
      this.cars = res.map((car: any) => ({
        ...car,
        processedImg: 'data:image/jpeg;base64,' + car.returnedImage
      }));
    });
  }

  deleteCarConfirmation(carId: number): void {
    this.carIdToDelete = carId;
    this.isModalVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    if (this.carIdToDelete !== null) {
      this.adminService.deleteCar(this.carIdToDelete).subscribe((res) => {
        this.isConfirmLoading = false;
        this.isModalVisible = false;
        this.message.success("Car deleted successfully!", { nzDuration: 5000 });
        this.getAllCars();
      });
    }
  }

  handleCancel(): void {
    this.isModalVisible = false;
    this.carIdToDelete = null;
  }
}
