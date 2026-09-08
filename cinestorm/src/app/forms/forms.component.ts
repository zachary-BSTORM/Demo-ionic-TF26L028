import { Component, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonHeader, IonContent, IonCard, IonCardHeader, IonCardContent, IonInput, IonLabel, IonButton, IonTextarea, IonSelect, IonSelectOption, IonToggle, IonCheckbox, IonRange, IonSearchbar } from "@ionic/angular";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  imports: [IonHeader, IonContent, IonCard, IonCardHeader, IonCardContent, IonInput, IonLabel, IonButton, ReactiveFormsModule, IonTextarea, IonSelect, IonSelectOption, IonToggle, IonCheckbox, IonRange, IonSearchbar],
})
export class FormsComponent{

  @ViewChild('input') input!: IonInput;

  ionViewDidEnter() {
    this.input.setFocus();
  }

  // ======================


  formDemo = new FormGroup({
    valueTest : new FormControl('',[Validators.required])
  })

  onSubmit(){
    if(this.formDemo.valid){
      console.log(this.formDemo.getRawValue());
      
    }
  }

}
