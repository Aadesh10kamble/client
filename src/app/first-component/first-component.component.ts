import { Component, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

enum Mode { login, register }

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css',
  preserveWhitespaces: true,
  inputs: ["childValue"],
  outputs: ["childEvent"]
})
export class FirstComponentComponent {
  mode = Mode.login
  loginForm = new FormGroup({ email: new FormControl(''), password: new FormControl('') })

  childValue: any;
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  })

  childEvent = new EventEmitter()

  onSubmit(val :any) {
    this.childEvent.emit(val)
  }
}
