import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'form';

  constructor(private fb:FormBuilder){

  }


  loginForm=this.fb.group({
    name:['',[Validators.required,Validators.maxLength(20),Validators.minLength(2)]],
    address:['',Validators.required],
    email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password:['',[Validators.required,Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")]]
  })

  get email(){
    return this.loginForm.get('email');
  }
  get pass(){
    return this.loginForm.get('password');
  }

  get name(){
    return this.loginForm.get('name');
  }

  get address(){
    return this.loginForm.get('address');
  }
}


