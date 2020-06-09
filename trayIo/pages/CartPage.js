/* global $ $$ */

import CheckoutUserInfoPage from './CheckoutUserInfoPage';

export default class CartPage {
  get cartContainer() { return $('//*[@class="cart_list"]'); }

  get allCartItemPrice() { return $$('//*[@class="item_pricebar"]/div'); }

  get allCartItemRemove() { return $$('//*[@class="item_pricebar"]/button'); }

  get allCartItemName() { return $$('//*[@class="inventory_item_name"]'); }

  get checkOutButton() { return $("//*[contains(@class, 'checkout_button')]"); }

  waitToLoad() {
    this.cartContainer.waitForDisplayed();
  }

  clickCheckoutButton() {
    this.checkOutButton.moveTo();
    this.checkOutButton.click();
    return new CheckoutUserInfoPage();
  }
}
