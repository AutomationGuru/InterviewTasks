/* global $ $$ */

import PrimaryHeader from './pageComponents/PrimaryHeader';

export default class ProductPage {
  get sortContainer() { return $('//*[@class="product_sort_container"]'); }

  get highToLowSortButton() { return $("//*[@value='hilo']"); }

  get sortHeaderName() { return $('//*[@class="product_label"]'); }

  get allProducts() { return $$('//*[@class="inventory_item"]'); }

  get eachProductPrice() { return $$('//*[@class="inventory_item_price"]'); }

  get eachProductAddToBasket() { return $$('//*[@class="pricebar"]//button'); }

  get eachProductName() { return $$('//*[@class="inventory_item_name"]'); }

  constructor() {
    // product page has a header
    this.header = new PrimaryHeader();
  }

  waitToLoad() {
    this.sortContainer.waitForDisplayed();
    this.allProducts[0].waitForDisplayed();
  }

  clickSortButton() {
    this.sortContainer.moveTo();
    this.sortContainer.click();
  }

  waitForSortOptionContainerExpand() {
    this.highToLowSortButton.waitForDisplayed();
  }

  clickSortHiLowPrice() {
    this.highToLowSortButton.moveTo();
    this.highToLowSortButton.click();
  }

  sortByPriceHiToLow() {
    this.clickSortButton();
    this.waitForSortOptionContainerExpand();
    this.clickSortHiLowPrice();
    this.sortHeaderName.click();
  }
}
