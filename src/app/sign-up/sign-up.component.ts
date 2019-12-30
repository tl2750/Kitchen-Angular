import { Component, OnInit } from '@angular/core';
import { Service1Service  } from '../service/service1.service'
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  NewUser: User = {
    username:'',
    first_name: '',
    last_name: '',
    password1:'',
    password2:'',
    question_1:'',
    answer_1: '',
    question_2:'',
    answer_2: '',
    is_provider: false
  };
  submitted = false;
  errorMsg = "The two passwords does not match!";

  constructor(public LoginService: Service1Service, private router: Router) { }

  ngOnInit() {
  }


  async createNewUser(){
    const formData = new FormData();
    if (this.NewUser.password1==this.NewUser.password2){
      formData.append("CSRF_TOKEN", '{{ csrf_token() }}')
      formData.append("username", this.NewUser.username)
      formData.append("password", this.NewUser.password1)
      formData.append("first_name", this.NewUser.first_name)
      formData.append("last_name", this.NewUser.last_name)
      formData.append("question_1", this.NewUser.question_1)
      formData.append("question_2", this.NewUser.question_2)
      formData.append("answer_1", this.NewUser.answer_1)
      formData.append("answer_2", this.NewUser.answer_2)
      formData.append("is_provider", this.NewUser.is_provider.toString())

      let response = await this.LoginService.sign_up(formData)
      response.subscribe((resp)=>{
        console.log(resp)
        this.router.navigate(['']);
      })
    } else {
      alert(this.errorMsg)
    }
  }

}
