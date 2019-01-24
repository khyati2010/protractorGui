import {
  ElementFinder,
  protractor,
  ElementArrayFinder,
  browser
} from "protractor";
import { Wait } from "./Wait";

export class Click extends Wait {
  public buttonClick(element: ElementFinder) {
    if (element != null) {
      if (this.isElementClickable(element)) element.click();
    } else {
      console.log("Click Button Web Element Not Located : " + element);
    }
  }

  public buttonClickByKey(element: ElementFinder) {
    if (element != null) {
      if (this.isElementClickable(element))
        element.sendKeys(protractor.Key.ENTER);
    } else {
      console.log("Click Button Web Element Not Located : " + element);
      throw new Error("Click Button Web Element Not Located : " + element);
    }
  }

  public buttonClickByAction(element: ElementFinder) {
    if (element != null) {
      browser
        .actions()
        .mouseMove(element)
        .perform();
      if (this.isElementClickable(element)) {
        browser
          .actions()
          .click(element)
          .perform();
      }
    } else {
      console.log("Click Button Web Element Not Located : " + element);
      throw new Error("Click Button Web Element Not Located : " + element);
    }
  }
}
