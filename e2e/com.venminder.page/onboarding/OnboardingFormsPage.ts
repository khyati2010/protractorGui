import { browser, protractor, Browser } from "protractor";
import {
  userData,
  siteUrls,
  masterFormSection
} from "../../com.venminder.utilities/TestData";
import { OnboardingFormsOR } from "../../com.venminder.page_object/onboarding/OnboardingFormsOR";
const chai = require("chai").use(require("chai-as-promised"));
const until = protractor.ExpectedConditions;
const expect = chai.expect;

export class VendorOnboardingForm extends OnboardingFormsOR {
  siteUrls: siteUrls = new siteUrls();
  userData: userData = new userData();
  masterFormSection: masterFormSection = new masterFormSection();

  clickOnboardingFormsTab() {
    browser.wait(
      until.elementToBeClickable(this.onboardingFormsTab),
      50000,
      "onboarding form tab is clicked "
    );
    this.onboardingFormsTab.click();
  }

  onboardingFormsSectionContent() {
    browser.wait(
      until.visibilityOf(this.masterFormTable),
      30000,
      "forms table is displayed"
    );
    this.masterFormTable.isDisplayed(),
      this.customFormTable.isDisplayed().then(function(isDisplayed) {
        expect(isDisplayed).to.equal(true);
      });
  }

  clickMasterFormActionBtn() {
    this.masterFormActionBtn.click();
    this.masterFormActionViewBtn.isDisplayed(),
      this.masterFormActionCloneBtn.isDisplayed().then(function(isDisplayed) {
        expect(isDisplayed).to.equal(true);
      });
  }

  clickCustomFormActionBtn() {
    this.customFormActionBtn.click();
    this.customFormActionCloneBtn.isDisplayed(),
      this.customFormActionDeleteBtn.isDisplayed(),
      this.customFormActionEditBtn.isDisplayed(),
      this.customFormActionViewBtn.isDisplayed().then(function(isDisplayed) {
        expect(isDisplayed).to.equal(true);
      });
  }

  clickAddNewMasterFormBtn() {
    this.addNewMasterFormBtn.click();
  }

  getvendorInformationSectionContent(item: any) {
    this.vendorInformationSection.getText().then(function(text) {
      let vendorInformationCount = text[0].split("\n");
      for (var i = 0; i < vendorInformationCount.length; i++) {
        expect(vendorInformationCount[i].trim()).to.equal(item[i]);
      }
    });
  }

  getProductInformationSectionContent(item: any) {
    this.productInformationSection.getText().then(function(text) {
      let productInformationCount = text[0].split("\n");
      for (var i = 0; i < productInformationCount.length; i++) {
        expect(productInformationCount[i].trim()).to.equal(item[i]);
      }
    });
  }

  getPricingInformationSectionContent(item: any) {
    this.pricingInformationSection.getText().then(function(text) {
      let pricingInformationCount = text[0].split("\n");
      for (var i = 0; i < pricingInformationCount.length; i++) {
        expect(pricingInformationCount[i].trim()).to.equal(item[i]);
      }
    });
  }

  clickSaveFormBtn(item: string) {
    this.saveFormBtn.click();
    browser.wait(
      until.visibilityOf(this.masterFormTable),
      30000,
      "forms table is displayed"
    );
    this.clientMasterForm.getText().then(function(text) {
      expect(text).to.equal(item);
    });
  }
}
