import { ExpectedConditions, ElementFinder, browser ,protractor} from "protractor";

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



  public static waitForLoader(time:number) {
    
    browser.sleep(time);
  }



  public static waitForElement(WebElement) {
    var until = protractor.ExpectedConditions;
    browser.wait(until.presenceOf(WebElement), 50000, 'Element taking too long to appear in the DOM');
  }

  public static waitForVisibiltyElement(WebElement) {
    var until = protractor.ExpectedConditions;
    browser.wait(until.elementToBeClickable(WebElement), 20000, 'Element taking too long to appear in the DOM');
  }
}
