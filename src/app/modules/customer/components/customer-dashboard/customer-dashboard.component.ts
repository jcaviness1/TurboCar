import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.scss'
})
export class CustomerDashboardComponent {

  cars: any = [];

  constructor(private service:CustomerService){ }

  ngOnInit() {
    this.getAllCars();
  }

  getAllCars() {
    this.service.getAllCars().subscribe((res) => {
      console.log(res);
      this.cars = res.map((car: any) => ({
        ...car,
        processedImg: 'data:image/jpeg;base64,' + car.returnedImage
      }));
    });
  }


  }


