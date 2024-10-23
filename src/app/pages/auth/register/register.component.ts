import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth/auth.service";
import {ClientService} from "../../../services/client/client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;
  @Input() modalMode: boolean = false;
  @Output() handleSwitchForm: EventEmitter<string> = new EventEmitter<string>();
  @Output() handleRegister: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private clientService: ClientService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  async register() {
    if (this.registerForm.invalid) {
      return;
    }
    const { email, password, name, phone } = this.registerForm.value;
    try {
      const user = await this.authService.registerWithEmail(email, password);
      await firstValueFrom(this.clientService.post({ name, email, phone, externalId: user?.uid, source: "google.com" }));
      if (this.modalMode) {
        this.handleRegister.emit(user);
        return;
      }
      if (user?.uid) {
        this.router.navigate([localStorage.getItem('base_url') || '']);
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  }

  goToLogin() {
    this.handleSwitchForm.emit('login');
  }

}
