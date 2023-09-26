import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: `account.page.html`,
  styleUrls: ['account.page.scss']
})
export class AccountPage {
  // Component logic here
  user = {
    username: '',
    email: '',
    password: '',
  };

signUp: boolean = true;
login: boolean = false;

  constructor(private navCtrl: NavController) {}

  signup() {
    
    if (this.isValidForm()) {
      // Store user data 
      localStorage.setItem('user', JSON.stringify(this.user));
      // Redirect to another 
      this.navCtrl.navigateRoot('/home');
    } else {
      // Handle validation errors
      console.log('Form is not valid');
    }
  }

  clickLogin() {
    this.signUp = false;
    this.login = true;
  }
  clickSignup() {
    this.signUp = true;
    this.login = false;
  }

  private isValidForm(): boolean {
    // Implement your validation rules here
    return (
      this.user.username.trim() !== '' &&
      this.user.email.trim() !== '' &&
      this.user.password.trim() !== ''
    );
  }
}
