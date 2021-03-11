import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-all-task',
  templateUrl: './all-task.component.html',
  styleUrls: ['./all-task.component.css']
})
export class AllTaskComponent implements OnInit {
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
      bidTime: "2020.10.14 16:45:00"
    },
    {
      start: "延安市黄陵县东昊煤厂-鼎诚",
      end: "咸阳市三原县三原站台",
      cargoContent: "煤炭",
      unitePrice: "400吨",
      carNumber: "不限辆", 
      requiredCar: "",
      timestamp: "2020.10.14 13:59:00",
      bidTime: "2020.10.14 16:45:00"
    },
    {
      start: "延安市黄陵县东昊煤厂-鼎诚",
      end: "咸阳市三原县三原站台",
      cargoContent: "煤炭",
      unitePrice: "400吨",
      carNumber: "不限辆", 
      requiredCar: "",
      timestamp: "2020.10.14 13:59:00",
      bidTime: "2020.10.14 16:45:00"
    },
    {
      start: "延安市黄陵县东昊煤厂-鼎诚",
      end: "咸阳市三原县三原站台",
      cargoContent: "煤炭",
      unitePrice: "400吨",
      carNumber: "不限辆", 
      requiredCar: "",
      timestamp: "2020.10.14 13:59:00",
      bidTime: "2020.10.14 16:45:00"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  public gotoSumMoney() {
    
    var targetComponent = {
      sectionName: "sumMoney",
      displayName: "运费汇总",
    }
    this.changeComponent.emit(targetComponent)
  }

}
