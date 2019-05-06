import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, EmailValidator, AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, map } from 'rxjs/operators';

@Directive({
  selector: '[appEmailValidator]',
  providers:[{provide: NG_ASYNC_VALIDATORS, useExisting: EmailValidatorDirective, multi:true}]
})
export class EmailValidatorDirective implements AsyncValidator{

  constructor(private _http: HttpClient) { }

  validate(control: AbstractControl): Observable<ValidationErrors> | null {
   return this._http.get<boolean>(`${environment.urlRecupNom}/verif?email=${control.value}`).pipe(
      map(bool => {
        if(bool === true)
          return { emailExistant : `L'email existe déjà !`};
        return null
      })
    );
  }
}
