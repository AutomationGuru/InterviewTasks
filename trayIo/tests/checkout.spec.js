/* global browser */
import LoginPage from '../pages/LoginPage';

describe('CheckOut Suite', () => {
  let productPage;
  // baseUrl in the wdio file can be accessed in the test and use / to navigate to the url
  before(() => {
    const loginPage = new LoginPage();
    loginPage.waitToLoad();
    productPage = loginPage.logingSuccess();
    productPage.waitToLoad();
  });

  it('Sort products, add least priced two Products to basket, remove least priced product and continue checkout',
    () => {
      productPage.sortByPriceHiToLow();
      // select last two products
      // eslint-disable-next-line no-plusplus
      const productsAddedToBasket = new Map();
      for (let i = (productPage.allProducts.length - 1); i > (productPage.allProducts.length - 3); i--) {
      // eslint-disable-next-line no-use-before-define
        productPage.eachProductAddToBasket[i].moveTo();
        productPage.eachProductAddToBasket[i].click();
        productsAddedToBasket.set(
          productPage.eachProductName[i].getText(),
          replaceSpeciaChar(productPage.eachProductPrice[i].getText()),
        );
      }
      const minProductPriceBasket = Math.min(...Array.from(productsAddedToBasket.values()));
      const cartPage = productPage.header.clickBasket();
      cartPage.waitToLoad();
      const productsInBasket = new Map();
      cartPage.allCartItemPrice.forEach((element, i) => {
        productsInBasket.set(
          cartPage.allCartItemName[i].getText(),
          replaceSpeciaChar(element.getText()),
        );
      });
      // verify we have the products added from prod page in basket
      assert.deepEqual(productsInBasket, productsAddedToBasket);
      cartPage.allCartItemPrice.forEach((element, i) => {
        if (replaceSpeciaChar(element.getText()) == minProductPriceBasket) {
          cartPage.allCartItemRemove[i].moveTo();
          cartPage.allCartItemRemove[i].click();
        }
      });
      // await the removal of the product
      browser.waitUntil(() => cartPage.allCartItemName.length === 1, 1000);
      const userInfoPage = cartPage.clickCheckoutButton();
      userInfoPage.waitToLoad();
    });
});

function replaceSpeciaChar(stringToClean) {
  return stringToClean.replace(/\$/g, '');
}
