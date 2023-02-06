import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interface/user';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @Input()
  initialState: BehaviorSubject<User> = new BehaviorSubject({});
  
  @Output()
  formValuesChanged = new EventEmitter<User>();
  
  @Output()
  formSubmitted = new EventEmitter<User>();

  loginForm: FormGroup = new FormGroup({});
  registerForm: FormGroup = new FormGroup({});
  constructor(private router: Router,private fb: FormBuilder, private userService: UserService, private toastrService:ToastrService) { }
  
  get name() { return this.registerForm.get('name')!; }
  get email() { return this.registerForm.get('email')!; }
  get password() { return this.registerForm.get('password')!; }
  get phone() { return this.registerForm.get('phone')!; }
  get address() { return this.registerForm.get('address')!; }
  
  ngOnInit() {
    this.initialState.subscribe(user => {
      this.registerForm = this.fb.group({
        name: [ user.name, [Validators.required] ],
        email: [ user.email, [ Validators.required, Validators.minLength(5) ] ],
        password: [ user.password, [ Validators.required] ],
        phone: [ user.phone, [Validators.required] ],
        address: [ user.address, [Validators.required] ],
        //isAdmin: [user.isAdmin, [Validators.required]]
      });
      this.loginForm = this.fb.group({
        email: [ user.email, [ Validators.required, Validators.minLength(5) ] ],
        password: [ user.password, [ Validators.required] ],
        //isAdmin: [user.isAdmin, [Validators.required]]
      });
    });
  
    this.registerForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
    this.loginForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
  }

  // submitForm() {
  //   this.addEmployee(this.registerForm.value);
  //   //this.formSubmitted.emit(this.loginForm.value);
  // }

  
  // submitFormLogin() {
  //   this.find(this.loginForm.value);
  //   this.toastrService.success(
  //     'Login Successful'
  //   )
  //   this.router.navigateByUrl('');
  //   //this.formSubmitted.emit(this.loginForm.value);
  // }


  submitFormLogin() {
    let user = this.loginForm.value;
    console.log(user);
    this.userService.getUserByEmailAndPassword(user)
      .subscribe({
        next: () => {
          this.router.navigate(['']);
          alert("Login Successful");
        },
        error: (error) => {
          alert(`Failed to Login: ${error.message}`);
          console.error(error);
        }
      });
  }

  submitFormRegister() {
    let user = this.registerForm.value;
    console.log(user);
    this.userService.createUser(user)
      .subscribe({
        next: () => {
          this.router.navigate(['']);
          alert("SignUp Successful");
        },
        error: (error) => {
          alert("Failed to SignUp: " + error.message);
          console.error(error);
        }
      });
  }

  // find(user: User) {
  //   console.log(user)
  //   this.userService.getUserByEmailAndPassword(user)
  //     .subscribe({
  //       next: () => {
  //       this.router.navigate(['']);
  //       this.toastrService.success(
  //         'Login Successful'
  //       )
  //       },
  //       error: (error) => {
  //         alert("Failed to Login")
  //         this.toastrService.error(error.error, 'Login Failed');
  //         console.error(error);
  //       }
  //     });
  // }

  // submitFormLogin() {
  //   let user = this.registerForm.value;
  //   console.log(user);
  //   this.userService.getUserByEmailAndPassword(user)
  //     .subscribe({
  //       next: (data) => {
  //         if (data.isAdmin) {
  //           this.router.navigate(['/admin']);
  //         } else {
  //           this.router.navigate(['/productdetails']);
  //         }
  //         alert("Login Successful");
  //       },
  //       error: (error) => {
  //         alert("Failed to Login");
  //         console.error(error);
  //       }
  //     });
  // }

  
}