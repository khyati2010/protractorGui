import { ExpectedConditions, ElementFinder, browser } from "protractor";

export class Wait {
  public isElementClickable(element: ElementFinder): boolean {
    try {
      browser.wait(ExpectedConditions.elementToBeClickable(element), 20000);
      return true;
    } catch (NoSuchElementException) {
      console.log(
        " Web Element Not Clickable after 20 sec wait : " +
          NoSuchElementException
      );
      return false;
    }
  }
}
