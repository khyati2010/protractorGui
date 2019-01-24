import { protractor, browser, ExpectedConditions } from "protractor";

export class AlertPopUp {
  public acceptAlert() {
    try {
      browser.wait(ExpectedConditions.alertIsPresent(), 5000).then(function() {
        browser
          .switchTo()
          .alert()
          .then(function(alert) {
            alert.accept();
          });
      });
    } catch (error) {
      console.log("Alert Not Present Exception : " + error);
    }
  }

  public dismissAlert() {
    try {
      browser.wait(ExpectedConditions.alertIsPresent(), 5000).then(function() {
        browser
          .switchTo()
          .alert()
          .then(function(alert) {
            alert.dismiss();
          });
      });
    } catch (error) {
      console.log("Alert Not Present Exception : " + error);
    }
  }

  public getTextOnAlert() {
    let data = null;
    try {
      browser.wait(ExpectedConditions.alertIsPresent(), 5000).then(function() {
        browser
          .switchTo()
          .alert()
          .then(function(alert) {
            alert.getText().then(function(text) {
              data = text;
            });
          });
      });
    } catch (error) {
      console.log("Alert Not Present Exception : " + error);
    }
    return data;
  }

  public setTextOnAlert(data: string) {
    try {
      browser.wait(ExpectedConditions.alertIsPresent(), 5000).then(function() {
        browser
          .switchTo()
          .alert()
          .then(function(alert) {
            alert.sendKeys(data);
          });
      });
    } catch (error) {
      console.log("Alert Not Present Exception : " + error);
    }
  }
}
