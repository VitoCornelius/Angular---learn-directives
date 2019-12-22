import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]' // this is an example of the attribute directive 
})
export class BetterHighlightDirective implements OnInit { //this is the right way to set the properties 

  @Input() defaultColor : string = 'transparent';
  @Input() highlightColor : string = 'blue';
  
  @HostBinding('style.backgroundColor') textColor : string = this.defaultColor; //here, use only the camel case, since the dashes are not allowed 

  constructor(private elementRef : ElementRef, private renderer : Renderer2) { }
  
  ngOnInit(){
    this.textColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(eventData : Event) {  // a convenient way of listening to events 
    this.textColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData : Event) {  // a convenient way of listening to events -> multiple events are there 
    this.textColor = this.defaultColor;
  }

  // // @HostBinding('style.color') textColor : string = 'black'; //here, use only the camel case, since the dashes are not allowed 

  // constructor(private elementRef : ElementRef, private renderer : Renderer2) { }

  // ngOnInit(){
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue'); 
  //   //Renderer is the better approach to modyfing the DOM. In some things, you are not able to access the DOM directly - if it is not run in the browser
  // }

  // @HostListener('mouseenter') mouseOver(eventData : Event) {  // a convenient way of listening to events 
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'violet');
  //   this.textColor = 'blue';
  // }

  // @HostListener('mouseleave') mouseLeave(eventData : Event) {  // a convenient way of listening to events -> multiple events are there 
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white');
  //   this.textColor = "red";
  // }


}
