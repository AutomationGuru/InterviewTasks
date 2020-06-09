/* global $ */
import ProductPage from './ProductPage';

export default class LoginPage {
  get userNameInputBox() { return $('//*[@data-test="username"]'); }

  get passwordInputBox() { return $('//*[@data-test="password"]'); }

  get loginButton() { return $('//*[@value="LOGIN"]'); }

  waitToLoad() {
    this.userNameInputBox.waitForDisplayed();
  }

  logingSuccess() {
    this.userNameInputBox.addValue('standard_user');
    this.passwordInputBox.addValue('secret_sauce');
    return this.clickLoginButton();
  }

  clickLoginButton() {
    this.loginButton.moveTo();
    this.loginButton.click();
    return new ProductPage();
  }
}
