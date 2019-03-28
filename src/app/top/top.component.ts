import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor(public breakpointObserver: BreakpointObserver) { }
  smallScreen: boolean;
  ngOnInit() {
    this.breakpointObserver
    .observe(['(min-width: 360px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.smallScreen = false;
      } else {
        this.smallScreen = true;
      }
    });
  }

}
