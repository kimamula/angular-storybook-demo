import { Component, ElementRef, ViewChild, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'script-helper',
  template: `<div #div style="display: none;">
  <ng-content></ng-content>
</div>`
})
export class ScriptHelperComponent implements AfterViewInit {

  @Input()
  src: string;

  @Input()
  script: string;

  @Input()
  type: string;

  @ViewChild('div') div: ElementRef;

  convertToScript() {
    const element = this.div.nativeElement;
    const script = document.createElement('script');
    script.type = this.type ? this.type : 'text/javascript';
    if (this.src) {
      script.src = this.src;
    }
    if (this.script) {
      script.textContent = this.script;
    }
    const parent = element.parentElement;
    parent.parentElement.replaceChild(script, parent);
  }

  ngAfterViewInit() {
    this.convertToScript();
  }
}
