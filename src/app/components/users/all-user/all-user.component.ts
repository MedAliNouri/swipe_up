import { Component, OnInit } from '@angular/core';
import { ErrorAlert } from 'src/app/shared/layout/features/alert/error.alert';
import { SuccessAlert } from 'src/app/shared/layout/features/alert/success.alert';
import { User } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/services/api/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.scss'],
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
})
export class AllUserComponent implements OnInit {
  cols: any
  users: any
  selectedUser: User[]
  user: User
  loading = true
  submitted = false
  apiUrl = environment.apiUrl
  dialog_show = false
  uploadedFiles = []
  imageSrc: any
  loadingImg = false
  imagetosave: any
  constructor(private userService: UserService) {
    this.getAll()
  }
  getAll() {

    this.userService.getAll().subscribe(res => {
      console.log(res)
      this.loading = false
      res.forEach(element => {
        if (!element.urlPhoto) {
          element.urlPhoto == "/images/default.jpg"
        }
      });
      this.cols = res

      this.users = res
    })
  }
  ngOnInit(): void {
  }
  openNew() {
    this.user = new User()
    this.dialog_show = true
  }
  deleteSelectedProducts() {

  }
  deleteUser(user) {

  }
  editUser(user) {
    this.user = user
    this.dialog_show = true
  }
  hideDialog() {
    this.dialog_show = false
  }
  saveProduct() {
    if (this.user._id == undefined) {
      this.userService.saveAndUploadSingle(this.user, this.imagetosave).subscribe((res:any) => {
        new SuccessAlert(res.message)
        this.getAll()
      })
    }
  }
  selectFile(user, event) {
    this.imageSrc = null
    this.loadingImg = true
    const reader = new FileReader();
    this.imagetosave = event.target.files[0]
    reader.onload = e => this.imageSrc = reader.result;

    reader.readAsDataURL(event.target.files[0])
    if (this.imageSrc || this.imageSrc != null) {
      this.loadingImg = false
    }




  }
}
