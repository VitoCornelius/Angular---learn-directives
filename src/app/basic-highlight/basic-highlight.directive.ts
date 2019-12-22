import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector : '[appBasicHighlight]' //this will be recognized without adding the [] to the element 
})
export class BasicHightlightDirective implements OnInit{
    //get the item that the directive is located in
    constructor(private elementRef : ElementRef) {
        
    } //this will create a class field
    
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green'; //this is not a good practice ! they may not be accessible at the time
    }
}