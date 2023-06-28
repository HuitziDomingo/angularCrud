import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup
  loading: boolean = false

  constructor(
    private readonly fb: FormBuilder,
    private readonly _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  login() {
    let user = this.form.value.user
    let password = this.form.value.password

    if (user == 'usuario' && password == 'casa') {
      this.success()
    } else {
      this.error()
      this.form.reset()
    }
  }

  fakeLogin() {

  }

  private error() {
    this._snackBar.open('Usario o Password Invalidos', 'X', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    })
  }

  private success() {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 3000)
  }

}
