import { Wait } from "./Wait";
import { by, ElementFinder, ElementArrayFinder, browser } from "protractor";

export class SelectDropDown extends Wait {
  public selectElementByText(element: ElementFinder, text: string) {
    if (element != null) {
      if (this.isElementClickable(element)) {
        element.click();
        element.all(by.tagName("option")).then(function(options) {
          let size = options.length;
          for (let i = 0; i < size; i++) {
            options[i].getText().then(function(data) {
              if (data == text) {
                console.log("Selected Text from Dropdown: " + data);
                options[i].click();
              }
            });
          }
        });
      } else {
        console.error("Select Element not Clickable Exception");
      }
    } else {
      console.error("Select dropDown Web Element Not Located : " + element);
    }
  }

  public selectElementByIndex(element: ElementFinder, index: number) {
    if (element != null) {
      if (this.isElementClickable(element)) {
        element.click();
        element.all(by.tagName("option")).then(function(options) {
          options[index].click();
          options[index].getText().then(function(text) {
            console.log("IndexBase Selected Text: " + text);
            return text;
          });
        });
      } else {
        console.error("Select Element not Clickable Exception");
      }
    } else {
      console.error("Select dropDown Web Element Not Located : " + element);
    }
  }

  public selectElementByValue(element: ElementFinder, value: string) {
    if (element != null) {
      if (this.isElementClickable(element)) {
        element.element(by.css("option[value='" + value + "']")).click();
      } else {
        console.error("Select Element not Clickable Exception");
      }
    } else {
      console.error("Select dropDown Web Element Not Located : " + element);
    }
  }

  public getOptions(element: ElementFinder) {
    if (element != null) {
      if (this.isElementClickable(element)) {
        return element.all(by.tagName("option"));
      } else {
        console.error("Select Element not Clickable Exception");
      }
    } else {
      console.error("Select dropDown Web Element Not Located : " + element);
    }
  }

  public selectRandomDropdownReturnText(element: ElementFinder): any {
    if (element != null) {
      if (this.isElementClickable(element)) {
        element.click();
        element.all(by.tagName("option")).then(function(options) {
          var size = options.length;
          var randomNumber = Math.floor(Math.random() * size);
          console.log("Random Number: " + randomNumber);
          if (randomNumber == 0) {
            randomNumber = randomNumber + 1;
          }
          options[randomNumber].click();
          options[randomNumber].getText().then(function(text) {
            console.log("Random Selected Text: " + text);
            return text;
          });
        });
      } else {
        console.error("Select dropDown Web Element Not Located : " + element);
      }
    } else {
      console.error("Select Element not Clickable Exception");
    }
  }
}
