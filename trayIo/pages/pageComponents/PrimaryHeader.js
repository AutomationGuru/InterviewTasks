/* global $ */

import CartPage from '../CartPage';

export default class PrimaryHeader {
  get basket() { return $('//*[@id="shopping_cart_container"]//span'); }

  get hamburgicon() { return $('//*[@class="bm-burger-button"]'); }

  getBasketQuantity() {
    return this.basket.getText();
  }

  clickBasket() {
    this.basket.moveTo();
    this.basket.click();
    return new CartPage();
  }
}
