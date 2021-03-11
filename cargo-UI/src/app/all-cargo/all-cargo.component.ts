import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-all-cargo',
  templateUrl: './all-cargo.component.html',
  styleUrls: ['./all-cargo.component.css']
})
export class AllCargoComponent implements OnInit {
  @Output() changeComponent = new EventEmitter<any>();

  public demoTasks = [
    {
      start: "延安市黄陵县东昊煤厂-鼎诚",
      end: "咸阳市三原县三原站台",
      cargoContent: "煤炭",
      unitePrice: "400吨",
      carNumber: "不限", 
      requiredCar: "",
      timestamp: "2020.10.14 13:59:00"
    },
    {
      start: "延安市黄陵县东昊煤厂-鼎诚",
      end: "咸阳市三原县三原站台",
      cargoContent: "煤炭",
      unitePrice: "400吨",
      carNumber: "不限辆", 
      requiredCar: "",
      timestamp: "2020.10.14 13:59:00"
    },
    {
      start: "延安市黄陵县东昊煤厂-鼎诚",
      end: "咸阳市三原县三原站台",
      cargoContent: "煤炭",
      unitePrice: "400吨",
      carNumber: "不限辆", 
      requiredCar: "",
      timestamp: "2020.10.14 13:59:00"
    },
    {
      start: "延安市黄陵县东昊煤厂-鼎诚",
      end: "咸阳市三原县三原站台",
      cargoContent: "煤炭",
      unitePrice: "400吨",
      carNumber: "不限辆", 
      requiredCar: "",
      timestamp: "2020.10.14 13:59:00"
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

  public releaseCargo() {
    var targetComponent = {
      sectionName: "allCargo",
      displayName: "已发布项目",
    }
    this.changeComponent.emit(targetComponent)
  }

}
