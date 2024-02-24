import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrl: './search-car.component.scss'
})
export class SearchCarComponent {

  searchCarForm!: FormGroup;
  listOfBrands = ["MERCEDES", "MINI","BMW", "MAZDA","AUDI", "FERRARI", "TESLA", "VOLVO", "TOYOTA", "HONDA", "FORD", "NISSAN", "HYUNDAI", "LEXUS", "KIA"];
  listOfType = ["Petrol", "Hybrid", "Diesel", "Electric", "CNG"];
  listOfColor = ["Red", "White", "Blue", "Black", "Orange", "Grey", "Silver"];
  isSpinning = false;
  listOfTransmission = ["Manual", "Automatic"];
  postCarForm: any;
  cars: any[] = [];


  constructor(private fb: FormBuilder,
    private service: AdminService){
    this.searchCarForm = this.fb.group({
      brand:[null],
      type:[null],
      transmission:[null],
      color:[null],
    })
  }

  searchCar() {
    this.isSpinning = true;
    this.service.searchCar(this.searchCarForm.value).subscribe((res) => {
      res.carDtoList.forEach((element: { processedImg: string; returnedImage: string; }) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        this.cars.push(element);
      });
      this.isSpinning = false;
    })
  }

}
