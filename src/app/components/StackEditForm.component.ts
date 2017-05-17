import { Stack } from '../models/Stack';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface StackEditFormValue {
    stackId: number;
    title: string;
    note: string;
}

@Component({
    selector: 'stack-edit-form-component',
    template: require('./StackEditForm.component.html')
})
export class StackEditFormComponent implements OnInit {
    @Input() stack: Stack;
    @Output() handleSubmit: EventEmitter<StackEditFormValue> = new EventEmitter(false);
    @Output() handleCancel: EventEmitter<any> = new EventEmitter(false);

    stackForm: FormGroup;

    constructor(private fb: FormBuilder) {
    }
    ngOnInit(): void {
        this.stackForm = this.fb.group({
            title: [this.stack.title, Validators.required],
            note: [this.stack.note]
        });
    }

    cancel(e: Event) {
        e.preventDefault();
        this.handleCancel.emit();
    }

    submit(e: Event) {
        e.preventDefault();
        if (this.stackForm.valid) {
            const value = {
                ...this.stackForm.value,
                stackId: this.stack.id
            };
            this.handleSubmit.emit(value);
        }
    }
}
