import { browser, ExpectedConditions } from "protractor";
import { LoginPageOR } from "../../com.venminder.page_object/shared/LoginPageOR";
import { userData, siteUrls } from "../../com.venminder.utilities/TestData";
import { TextBox } from "../../com.venminder.utilities/TextBox";
import { Click } from "../../com.venminder.utilities/Click";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  siteUrls: siteUrls = new siteUrls();
  userData: userData = new userData();
  textbox = new TextBox();
  click = new Click();

  openUrl(url: any) {
    browser.driver.manage().deleteAllCookies();
    browser.get(url);
  }

  
  openMobileView() {

    browser.driver.manage().deleteAllCookies();
    var width = 600;
    var height = 400;
    browser.driver.manage().window().setSize(width, height);
    browser.sleep(6000);
    browser.get(this.siteUrls.sand_dev_3_url);


  }

  signIn(userName: string, password: string) {
    this.textbox.setTextValue(LoginPageOR.username, userName);
    console.log("Enter Email Id :- " + userName);
    this.textbox.setTextValue(LoginPageOR.password, password);
    console.log("Enter Password :- " + password);
    this.click.buttonClick(LoginPageOR.login_button);
    console.log("Click on Login button");
    browser.sleep(5000);
  }

  login() {
    this.signIn(this.userData.admin_username, this.userData.password);
    console.log("logging In.....");
  }

  signOut() {
    LoginPageOR.loggedIn_user_btn.click();
    browser.wait(
      ExpectedConditions.elementToBeClickable(LoginPageOR.logoutBtn),
      50000,
      "logout button is not clickable"
    );
    LoginPageOR.logoutBtn.click();
  }
}
