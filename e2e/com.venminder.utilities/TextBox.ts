import { browser, ElementFinder, ExpectedConditions } from "protractor";

export class TextBox {
  public setTextValue(element: ElementFinder, data: string) {
    if (element != null) {
      browser.wait(ExpectedConditions.presenceOf(element), 20000);
      element.clear();
      element.sendKeys(data);
    } else throw new Error("Element not Present Exception");
  }

  public getTextValue(element: ElementFinder) {
    if (element != null) {
      browser.wait(ExpectedConditions.presenceOf(element), 20000);
      element.getText().then(function(text) {
        return text;
      });
    } else throw new Error("Element not Visible Exception");
  }
}
