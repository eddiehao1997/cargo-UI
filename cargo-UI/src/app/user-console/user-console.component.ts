import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../service/authentication/authentication.service';
import { DataTransactionService } from '../service/data-transaction/data-transaction.service';

@Component({
  selector: 'app-user-console',
  templateUrl: './user-console.component.html',
  styleUrls: ['./user-console.component.css']
})
export class UserConsoleComponent implements OnInit {

  public currentUser: string;
  public loading = true;
  public currentTitle = "";
  public currentSection = {
    sectionName: "null",
    displayName: "",
  };
  // public 
  public curMenu = [];

  public carUserContent = [
    {
      sectionName: "bidCargo",
      displayName: "车主抢单",
      subSection: [
        {
          sectionName: "allBidableCargo",
          displayName: "运单列表",
        },
        {
          sectionName: "placeBid",
          displayName: "货运抢单",
        }
      ]
    },
    {
      sectionName: "ongoingTask",
      displayName: "电子运单",
      subSection: [
        {
          sectionName: "allBiddedTask",
          displayName: "已有运单",
        },
        {
          sectionName: "taskDetail",
          displayName: "运单详情",
        },
        {
          sectionName: "sumMoneyCar",
          displayName: "运费汇总",
        },
        {
          sectionName: "moneyListCar",
          displayName: "运费结算",
        },
        
      ]
    },
    {
      sectionName: "others",
      displayName: "其他",
      subSection: [
        {
          sectionName: "myCar",
          displayName: "我的车辆",
        },
        {
          sectionName: "carPrice",
          displayName: "车辆询价",
        },
        {
          sectionName: "feedback",
          displayName: "意见反馈",
        }
      ]
    }
  ]

  public cargoUserContent = [
    {
      sectionName: "cargoInfo",
      displayName: "待运项目",
      subSection: [
        {
          sectionName: "newCargo",
          displayName: "发布新项目",
        },
        {
          sectionName: "allTask",
          displayName: "全部运单",
        },
        // {
        //   sectionName: "allCargo",
        //   displayName: "已发布项目",
        // }
      ]
    },
    {
      sectionName: "ongoingTask",
      displayName: "配送项目",
      subSection: [
        // {
        //   sectionName: "searchTask",
        //   displayName: "查询运单",
        // },
        {
          sectionName: "moneyList",
          displayName: "运费列表",
        },
        {
          sectionName: "sumMoney",
          displayName: "运费汇总",
        }
      ]
    },
    {
      sectionName: "others",
      displayName: "其他",
      subSection: [
        {
          sectionName: "blacklist",
          displayName: "车辆黑名单",
        },
        {
          sectionName: "feedback",
          displayName: "意见反馈",
        }
      ]
    }
  ]

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService,
    public dataTransactionService: DataTransactionService,
  ) { 
    console.log("user-console constructed");
    console.log(this.authenticationService.currentUserValue);
    this.currentUser = authenticationService.currentUserValue;
    if (this.currentUser == "car-user") {
      this.currentTitle = "车主中心";
      this.curMenu = this.carUserContent;
      this.currentSection = {
        sectionName: "allBiddedTask",
        displayName: "已有运单",
      }
    } else {
      this.currentTitle = "货主中心";
      this.curMenu = this.cargoUserContent;
      this.currentSection = {
        sectionName: "allTask",
        displayName: "全部运单",
      }
    }
  }

  ngOnInit(): void {
    console.log("user-console onInit");
  }

  public logout() {
    console.log("user-console logging out")
    this.authenticationService.logout();
    console.log("user-console redirecting")
    this.router.navigate(['/login']);
    // window.location.href = 'https://anly.io/landing';
  }

  public changeSection(sectionName) {
    console.log(sectionName);
    this.currentSection = sectionName;
  }

  onChangeComponent(componentName: any) {
    console.log(componentName);
    this.currentSection = componentName;
  }

}
