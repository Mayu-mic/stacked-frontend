import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stack } from '../models/Stack';
import { Observable } from 'rxjs/Rx';
import { Component, EventEmitter, Output } from '@angular/core';

interface FormValue {
    title: string;
    note: string;
}

@Component({
    selector: 'stack-form-component',
    template: require('./StackForm.component.html'),
})
export class StackFormComponent {
    @Output() handleSubmit: EventEmitter<FormValue> = new EventEmitter(false);

    stackForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.stackForm = fb.group({
            title: ['', Validators.required],
            note: [''],
        });
    }

    submit(event: Event) {
        event.preventDefault();
        if (!this.stackForm.invalid) {
            this.handleSubmit.emit(this.stackForm.value);
            this.stackForm.reset();
        }
    }
}
