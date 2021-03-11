import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-new-cargo',
  templateUrl: './new-cargo.component.html',
  styleUrls: ['./new-cargo.component.css']
})
export class NewCargoComponent implements OnInit {
  @Output() changeComponent = new EventEmitter<any>();

  public demoTask = {
    start: "延安市黄陵县东昊煤厂-鼎诚",
    end: "咸阳市三原县三原站台",
    cargoContent: "煤炭",
    unitePrice: "400吨",
    carNumber: "不限", 
    requiredCar: "",
    timestamp: "2020.10.14 13:59:00",
    price: 53
  }
  
  cargoForm = new FormGroup({
    startLocation: new FormControl(''),
    endLocation: new FormControl(''),
    cargoContent: new FormControl(''),
    unitPrice: new FormControl(''), 
    cargoAmount: new FormControl(''),
    tripNumber: new FormControl(''), 
    requiredCar: new FormControl(0),
    timestamp: new FormControl(''),
    price: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  public releaseCargo() {
    


    var targetComponent = {
      sectionName: "allTask",
      displayName: "全部运单",
    }
    this.changeComponent.emit(targetComponent)
  }

}
