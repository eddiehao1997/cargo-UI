import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { DataTransactionService } from '../service/data-transaction/data-transaction.service';

@Component({
  selector: 'app-all-bidable-cargo',
  templateUrl: './all-bidable-cargo.component.html',
  styleUrls: ['./all-bidable-cargo.component.css']
})
export class AllBidableCargoComponent implements OnInit {
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

  constructor(
    public dataTransactionService: DataTransactionService,
  ) { 
    
  }

  ngOnInit(): void {
  }


  

  public goToBiddingPage(demoTaskData) {
    console.log(demoTaskData);
    var targetComponent = {
      sectionName: "placeBid",
      displayName: "货运抢单",
    }
    this.changeComponent.emit(targetComponent)
  }

}
