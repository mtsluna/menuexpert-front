import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  @Input() modalMode: boolean = false;
  @Output() handleSwitchForm: EventEmitter<string> = new EventEmitter<string>();
  @Output() handleLogin: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  async login() {
    if (this.loginForm.invalid) {
      return;
    }
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authService.loginWithEmail(email, password);
      if (this.modalMode) {
        this.handleLogin.emit(user);
        return;
      }
      if (user?.uid && !this.modalMode) {
        this.router.navigate([localStorage.getItem('base_url') || '']);
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  }

  goToRegister() {
    this.handleSwitchForm.emit('register');
  }
}
