import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective { //this is a custom structural directive (jsut linke *ngIF)

  @Input() set appUnless(condition : boolean) { //this is executed whenether the property changes! //the name has to be identical 
    if (!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
      //display nothing
    }
  }

  constructor(private templateRef : TemplateRef<any>, private vcRef : ViewContainerRef) {  //gives us access to the template and where we want to place it 
  }

}
