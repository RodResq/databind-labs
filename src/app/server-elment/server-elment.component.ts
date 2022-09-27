import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-elment',
  templateUrl: './server-elment.component.html',
  styleUrls: ['./server-elment.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElmentComponent implements OnInit {

  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
