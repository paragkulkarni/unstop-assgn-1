import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../service/user.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public activeModal: NgbActiveModal
  ) {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
    this.userService.sendUser(this.form.value);
    console.log(this.userService.userList);
    this.activeModal.close('Closing');
  }
}
