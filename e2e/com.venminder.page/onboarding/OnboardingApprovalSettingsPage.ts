import { browser, protractor, ExpectedConditions } from "protractor";
import { userData, siteUrls } from "../../com.venminder.utilities/TestData";
import { OnboardingApprovalSettings } from "../../com.venminder.page_object/onboarding/OnboardingApprovalSettingsOR";
const chai = require("chai").use(require("chai-as-promised"));
const until = protractor.ExpectedConditions;
const expect = chai.expect;

export class ApprovalSettings extends OnboardingApprovalSettings {
  siteUrls: siteUrls = new siteUrls();
  userData: userData = new userData();

  approverSettingsContent() {
    browser.wait(
      until.visibilityOf(this.newVendorApprovalSettingsTitle),
      50000,
      "Approval settings content displayed"
    );
    this.exemptCategoriesDropdown,
      this.approverDropdownTitle,
      this.applySettingCancelBtn,
      this.approverApplySettingsBtn,
      this.approversDropdown.isDisplayed().then(function(Displayed) {
        expect(Displayed).to.equal(true);
      });
  }

  clickApprovalSettingsCanclBtn() {
    this.applySettingCancelBtn.click();
  }

  clickApproversDropdownBtn() {
    this.approversDropdown.click();
  }

  selectApprover() {
    this.exemptCategoriesDropdownSearchInput.click();
    this.approverListItem.click();
    this.approverApplySettings.click();
    this.timeStampOnApplySettings.isDisplayed().then(function(displayed) {
      expect(displayed).to.equal(true);
    });
  }
}
