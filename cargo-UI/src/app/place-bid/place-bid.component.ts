import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-place-bid',
  templateUrl: './place-bid.component.html',
  styleUrls: ['./place-bid.component.css']
})
export class PlaceBidComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

  public goToAllBidableCargo() {
    var targetComponent = {
      sectionName: "allBidableCargo",
      displayName: "运单列表",
    }
    this.changeComponent.emit(targetComponent)
  }

  public bidCargo() {
    alert("抢单成功！");
    var targetComponent = {
      sectionName: "allBiddedTask",
      displayName: "已有运单",
    }
    this.changeComponent.emit(targetComponent)
  }

}
