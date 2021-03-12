import { FormGroup, ValidationErrors } from '@angular/forms';

export function PasswordMustMatch( controlName: string, matchingControlName: string ): ValidationErrors | null {
    return (formGroup: FormGroup ) => {
        const pw = formGroup.controls[controlName];             // to get entered password
        const cpw = formGroup.controls[matchingControlName];    // to get confirmed password

        if (cpw.errors && !cpw.errors.mustMatch ) {
            // if any other validator found anywhere else... let's return
            return;
        }

        // set Errors
        if (pw.value !== cpw.value) {
            cpw.setErrors({mustMatch: true});
        } else {
            cpw.setErrors(null);
        }
    };
}
