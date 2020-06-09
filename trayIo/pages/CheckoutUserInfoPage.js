/* global $ */

export default class CheckoutUserInfoPage {
  get firstNameInputBox() { return $('//*[@data-test="firstName"]'); }

  waitToLoad() {
    this.firstNameInputBox.waitForDisplayed();
  }
}
