import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../customer-services/customer.service';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {




selectedFile: File | null;
imagePreview:string | ArrayBuffer | null;
  categoryForm: FormGroup;

  constructor(
    
    private fb : FormBuilder,
    private service : CustomerService,
    private MatGridList: MatGridListModule
  ){

  }
 ngOnInit(){
  this.categoryForm= this.fb.group({
    name:[null, Validators.required],
    description:[null, Validators.required],
 })
 }
postCategory(){
  console.log(this.categoryForm.value);
  const formdata : FormData= new FormData();
  formdata.append("img", this.selectedFile);
  formdata.append("name",this.categoryForm.get("name").value)
  formdata.append("description",this.categoryForm.get("description").value)
  this.service.postCategory(formdata).subscribe({
    next: (res) => {
      console.log(res);
    },
    error: (err) => {
      console.error('Erreur lors de l\'envoi de la requête:', err);
    },
    complete: () => {
      console.log('Requête terminée avec succès.');
    }
  });
}  

onFileSelected(event:any){
this.selectedFile = event.target.files[0];
this.previewImage;
}

previewImage(){
  const reader = new FileReader();
  reader.onload = () =>{
    this.imagePreview = reader.result;
  };
  reader.readAsDataURL(this.selectedFile);

}}