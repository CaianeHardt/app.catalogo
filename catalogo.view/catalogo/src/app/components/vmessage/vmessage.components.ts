import { Component, Input } from '@angular/core';

@Component({
    selector: 'cat-vmessage',
    templateUrl: './vmessage.components.html'
})
export class VMessageComponents {
    @Input() text = '';
 }