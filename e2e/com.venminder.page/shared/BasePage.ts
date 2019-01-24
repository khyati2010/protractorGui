import { BasePageOR } from "../../com.venminder.page_object/shared/BasePageOR";
import { userData } from "../../com.venminder.utilities/TestData";
import { browser, ExpectedConditions } from "protractor";
import { TextBox } from "../../com.venminder.utilities/TextBox";
import { Click } from "../../com.venminder.utilities/Click";

export class BasePage {
  textbox = new TextBox();
  click = new Click();

  public clickOnHamburgerMenu() {
    if (!expect(browser.getCurrentUrl()).toEqual(userData.URL_HOME_PAGE)) {
      if (
        browser.wait(ExpectedConditions.presenceOf(BasePageOR.menuIcon), 20000)
      )
        this.click.buttonClick(BasePageOR.menuIcon);
    } else {
      console.log("User is on Venminder Home Page, clicking on Hamburger Menu");
    }
  }

  public clickOnHome() {
    this.clickOnHamburgerMenu();
    if (
      browser.wait(ExpectedConditions.presenceOf(BasePageOR.homeLink), 20000)
    ) {
      this.click.buttonClick(BasePageOR.homeLink);
    }
  }

  public clickOnAddVendor() {
    this.clickOnHamburgerMenu();
    if (
      browser.wait(
        ExpectedConditions.presenceOf(BasePageOR.addVendorLink),
        20000
      )
    ) {
      this.click.buttonClick(BasePageOR.addVendorLink);
    }
  }

  public getRandomInteger(min?: number, max?: number) {
    if (min && max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      return Math.floor(Math.random() * (90000 - 10000 + 1)) + 90000;
    }
  }

  public generateRandomText(): string {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
}
