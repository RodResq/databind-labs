import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-elment',
  templateUrl: './server-elment.component.html',
  styleUrls: ['./server-elment.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElmentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ContentChild('contentParagraph') contentParagraph: ElementRef

  constructor() { 
    console.log('Constructor called!');
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(changes);
    console.log('Text content of paragraph' + this.contentParagraph.nativeElement.textContent);
    
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
    console.log('Text content of paragraph' + this.contentParagraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }

}
