import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sum-money',
  templateUrl: './sum-money.component.html',
  styleUrls: ['./sum-money.component.css']
})
export class SumMoneyComponent implements OnInit {
  @Output() changeComponent = new EventEmitter<any>();

  public demoTask = {
    start: "延安市黄陵县东昊煤厂-鼎诚",
    end: "咸阳市三原县三原站台",
    cargoContent: "煤炭",
    unitePrice: "400吨",
    carNumber: "不限", 
    requiredCar: "",
    timestamp: "2020.10.14 13:59:00",
    bidTime: "2020.10.14 16:45:00", 
    price:53
  };
  constructor() { }

  ngOnInit(): void {
  }

  public gotoMoneyList() {
    
    var targetComponent = {
      sectionName: "moneyList",
      displayName: "运费列表",
    }
    this.changeComponent.emit(targetComponent)
  }

  public confirmPayment() {
    alert("已确认收款！");
    var targetComponent = {
      sectionName: "moneyList",
      displayName: "运费列表",
    }
    this.changeComponent.emit(targetComponent)
  }

}
