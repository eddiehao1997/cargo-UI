import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sum-money-car',
  templateUrl: './sum-money-car.component.html',
  styleUrls: ['./sum-money-car.component.css']
})
export class SumMoneyCarComponent implements OnInit {
  @Output() changeComponent = new EventEmitter<any>();

  public demoTasks = [
    {
      start: "延安市黄陵县东昊煤厂-鼎诚",
      end: "咸阳市三原县三原站台",
      cargoContent: "煤炭",
      unitePrice: "400吨",
      carNumber: "不限", 
      requiredCar: "",
      timestamp: "2020.10.14 13:59:00",
      bidTime: "2020.10.14 16:45:00", 
      price:53
    },
    {
      start: "延安市黄陵县东昊煤厂-鼎诚",
      end: "咸阳市三原县三原站台",
      cargoContent: "煤炭",
      unitePrice: "400吨",
      carNumber: "不限辆", 
      requiredCar: "",
      timestamp: "2020.10.14 13:59:00",
      bidTime: "2020.10.14 16:45:00",
      price:127
    },
    {
      start: "延安市黄陵县东昊煤厂-鼎诚",
      end: "咸阳市三原县三原站台",
      cargoContent: "煤炭",
      unitePrice: "400吨",
      carNumber: "不限辆", 
      requiredCar: "",
      timestamp: "2020.10.14 13:59:00",
      bidTime: "2020.10.14 16:45:00",
      price:541.9
    },
    {
      start: "延安市黄陵县东昊煤厂-鼎诚",
      end: "咸阳市三原县三原站台",
      cargoContent: "煤炭",
      unitePrice: "400吨",
      carNumber: "不限辆", 
      requiredCar: "",
      timestamp: "2020.10.14 13:59:00",
      bidTime: "2020.10.14 16:45:00",
      price: 60
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public goToMoneyListCar() {
    var targetComponent = {
      sectionName: "moneyListCar",
      displayName: "运费结算",
    }
    this.changeComponent.emit(targetComponent)
  }

}
