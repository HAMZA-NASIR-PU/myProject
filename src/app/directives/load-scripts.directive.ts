import { DOCUMENT } from '@angular/common';
import { AfterContentInit, AfterViewInit, Directive, ElementRef, Inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appLoadScripts]',
  standalone: true
})
export class LoadScriptsDirective implements AfterViewInit{

  constructor(
    private el: ElementRef, 
    @Inject(DOCUMENT) private document: Document) {}

    ngAfterViewInit() {
      // debugger;
      const templateEl = this.el.nativeElement.firstElementChild as HTMLElement;
      if (templateEl) {
       this.replaceDivWithScript(templateEl);
      }
    }

    private replaceDivWithScript(templateEl: HTMLElement) {
      const script = this.document.createElement('script');
      
      // see full code below for implementations
      this.copyAttributesFromTemplateToScript(templateEl, script);
      this.copyTemplateContentToScript(templateEl, script);
      templateEl.remove();
      // add the new script element to the host div so the 
      // browser will execute it
      this.el.nativeElement.appendChild(script);
    }

    private copyAttributesFromTemplateToScript(templateEl: HTMLElement, script: HTMLScriptElement) {
      for (let a = 0; a < templateEl.attributes.length; a++) {
        script.attributes.setNamedItem(templateEl.attributes[a].cloneNode() as Attr);
      }
    }
  
    private copyTemplateContentToScript(templateEl: HTMLElement | any, script: HTMLScriptElement) {
      const scriptContent = this.document.createTextNode(templateEl.textContent);
      script.appendChild(scriptContent);
    }


}
