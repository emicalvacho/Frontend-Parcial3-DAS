import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosResourceService } from '../api/services/usuarios-resource.service';
import { SESSION_STORAGE, WebStorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;

  // Decidir algun tipo de session storage
  constructor(private fb:FormBuilder, private _service:UsuariosResourceService, @Inject(SESSION_STORAGE) private _storage: WebStorageService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      correo: ['',[Validators.required, Validators.maxLength(255), Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      clave:['',[Validators.required, Validators.maxLength(32)]]
    });
  }

  get form(): any { 
    return this.loginForm.controls; 
  }

  login(): void{
    this.submitted = true;
    if(this.loginForm.valid){
      this._service.validar(this.loginForm.value).subscribe((token:string)=>{
        // this._storage.set("token", token);
        console.log(token);
        // hacer el navigate
        // inyectamos router 
        
        // sessionStorage
      },
      (err)=>{
        console.log(err);
      })
    }
  }
}
