import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Output() changeComponent = new EventEmitter<any>();

  public demoTask = {
    start: "延安市黄陵县东昊煤厂-鼎诚",
    end: "咸阳市三原县三原站台",
    cargoContent: "煤炭",
    unitePrice: "400吨",
    carNumber: "不限", 
    requiredCar: "",
    price: 53,
    timestamp: "2020.10.14 13:59:00",
    bidTime: "2020.10.14 16:45:00"
  }

  constructor() { }

  ngOnInit(): void {
  }

  public goToAllBiddedTask() {
    var targetComponent = {
      sectionName: "allBiddedTask",
      displayName: "已有运单",
    }
    this.changeComponent.emit(targetComponent)
  }

  public goToMoneyListCar() {
    var targetComponent = {
      sectionName: "moneyListCar",
      displayName: "运费结算",
    }
    this.changeComponent.emit(targetComponent)
  }
}
