import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-elment',
  templateUrl: './server-elment.component.html',
  styleUrls: ['./server-elment.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElmentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() { 
    console.log('Constructor called!');
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
  }

}
