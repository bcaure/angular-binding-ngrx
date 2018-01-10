import { Directive, ElementRef, Input, HostListener, OnInit, } from '@angular/core';

@Directive({ selector: '[folding]' })
export class FoldingDirective implements OnInit {

    constructor(private el: ElementRef) {
    }

    ngOnInit(): void {
        this.el.nativeElement.style.cursor = 'pointer';
        this.hide();
    }

    @HostListener('click') onClick() {
        this.hide();        
    }    
    
    hide() {
        let hides = this.el.nativeElement.parentElement.querySelectorAll("*:not(h1)");
        for (let hide of hides) hide.style.display = hide.style.display=='none'?'initial':'none';
    }
}