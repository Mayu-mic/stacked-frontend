import { Component, Input, OnInit } from '@angular/core';
import { Stack } from '../models/Stack';

@Component({
    selector: 'stack-component',
    template: require('./Stack.component.html')
})
export class StackComponent {
    @Input() stack: Stack;
    @Input() stackNo: number;
}
