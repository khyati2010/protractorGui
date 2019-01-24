import { BasePageOR } from "../../com.venminder.page_object/shared/BasePageOR";
import { userData, VendorProfileData } from "../../com.venminder.testdata/TestData";
import { browser, protractor } from "protractor";
import { TextBox } from "../../com.venminder.utilities/TextBox";
import { Click } from "../../com.venminder.utilities/Click";
import { VendorDashboardPageOR } from "../../com.venminder.page_object/dashboard/VendorDashboardPageOR";
const until = protractor.ExpectedConditions;

export class BasePage {
  textbox = new TextBox();
  click = new Click();

  public clickOnHamburgerMenu() {
    if (!expect(browser.getCurrentUrl()).toEqual(userData.URL_HOME_PAGE)) {
      if (browser.wait(until.presenceOf(BasePageOR.menuIcon), 20000))
        this.click.buttonClick(BasePageOR.menuIcon);
    } else {
      console.log("User is on Venminder Home Page, clicking on Hamburger Menu");
    }
  }

  public clickOnHome() {
    this.clickOnHamburgerMenu();
    if (browser.wait(until.presenceOf(BasePageOR.homeLink), 20000)) {
      this.click.buttonClick(BasePageOR.homeLink);
    }
  }

  public clickOnAddVendor() {
    this.clickOnHamburgerMenu();
    if (browser.wait(until.presenceOf(BasePageOR.addVendorLink), 20000)) {
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

  async searchVendorAndGoToDashboardPage_Old() {
    let vendorname;
    this.textbox.setTextValue(
      BasePageOR.inputVendorSearch_old,
      VendorProfileData.vendor_keyword
    );
    browser.sleep(3000);
    BasePageOR.vendorNameSearchList_old.then(function (options) {
      let size = options.length;
      let randomNumber = Math.floor(Math.random() * size);
      options[randomNumber].getText().then(function (text) {
        console.log("Random Selected Vendor Name: " + text);
        return (vendorname = text);
      });
      options[randomNumber].click();
    });
    browser.wait(until.invisibilityOf(BasePageOR.loadingWaitIndicator), 20000);
    browser.wait(
      until.invisibilityOf(BasePageOR.loadingCircleIndicator),
      20000
    );
    expect(
      this.textbox.getTextValue(VendorDashboardPageOR.labelVendorName)
    ).toEqual(vendorname);
  }
}
