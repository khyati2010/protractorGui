import { browser, ElementFinder, ExpectedConditions } from "protractor";

export class TextBox {
  public setTextValue(locator: ElementFinder, data: string) {
    if (locator != null) {
      browser.wait(ExpectedConditions.presenceOf(locator), 20000);
      locator.clear();
      locator.sendKeys(data);
    } else throw new Error("Element not Present Exception");
  }

  public getTextValue(locator: ElementFinder) {
    if (locator != null) {
      browser.wait(ExpectedConditions.presenceOf(locator), 20000);
      locator.getText().then(function(text) {
        return text;
      });
    } else throw new Error("Element not Visible Exception");
  }
}
