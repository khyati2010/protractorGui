import { BasePageOR } from "./../../com.venminder.page_object/shared/BasePageOR";
import { VendorDashboardPageOR } from "./../../com.venminder.page_object/dashboard/VendorDashboardPageOR";
import { AddVendorPageOR } from "./../../com.venminder.page_object/dashboard/AddVendorPageOR";
import { Click } from "./../../com.venminder.utilities/Click";
import { TextBox } from "./../../com.venminder.utilities/TextBox";
import { browser, ExpectedConditions } from "protractor";
import { BasePage } from "../shared/BasePage";
import { SelectDropDown } from "../../com.venminder.utilities/SelectDropDown";

var vendorName = null;
var criticality = null;
var productName = null;
var productType = null;
var categories = null;
var productManagers = null;

export class AddVendorPage extends BasePage {
  textbox = new TextBox();
  click = new Click();
  select = new SelectDropDown();

  fillCreateVendorForm(
    vendarName: string,
    criticality: string,
    thirdFourthIndex: number,
    productName,
    productType,
    productManager?: string
  ) {
    browser.wait(
      ExpectedConditions.presenceOf(AddVendorPageOR.headerAddVendor),
      20000
    );
    this.textbox.setTextValue(AddVendorPageOR.inputVendorName, vendarName);
    this.select.selectElementByText(
      AddVendorPageOR.selectCriticality,
      criticality
    );
    this.select.selectElementByIndex(
      AddVendorPageOR.selectThirdFourthParty,
      thirdFourthIndex
    );
    this.textbox.setTextValue(AddVendorPageOR.inputProductName, productName);
    this.textbox.setTextValue(AddVendorPageOR.inputProductType, productType);
    categories = this.select.selectRandomDropdownReturnText(
      AddVendorPageOR.selectCategory
    );
    productManagers = this.select.selectRandomDropdownReturnText(
      AddVendorPageOR.selectProductManager
    );
  }

  async createNewVendor() {
    this.clickOnAddVendor();
    vendorName = "Vendor_" + this.generateRandomText();
    criticality = "Non-critical";
    productName = "Product_" + this.generateRandomText();
    productType = "ACH Services";
    this.fillCreateVendorForm(
      vendorName,
      criticality,
      1,
      productName,
      productType
    );
    this.click.buttonClick(AddVendorPageOR.buttonSubmit);
    browser.wait(
      ExpectedConditions.invisibilityOf(BasePageOR.loadingWaitIndicator),
      20000
    );
    browser.wait(
      ExpectedConditions.presenceOf(AddVendorPageOR.buttonGoToVendorDashboard),
      20000
    );
    this.click.buttonClick(AddVendorPageOR.buttonGoToVendorDashboard);
    browser.wait(
      ExpectedConditions.visibilityOf(
        VendorDashboardPageOR.headerVendorDashboard
      ),
      20000
    );
    expect(VendorDashboardPageOR.headerVendorDashboard.getText()).toEqual(
      "Vendor Dashboard"
    );
    let vendorname = await VendorDashboardPageOR.labelVendorName.getText();
    expect(vendorname).toEqual(vendorName);
  }
}
