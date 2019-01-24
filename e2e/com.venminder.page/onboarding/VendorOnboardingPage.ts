import { browser, protractor } from "protractor";
import { OnboardingHomePageOR } from "../../com.venminder.page_object/onboarding/OnboardingHomePageOR";
import { siteUrls, userData } from "../../com.venminder.testdata/TestData";
const chai = require("chai").use(require("chai-as-promised"));
const until = protractor.ExpectedConditions;
const expect = chai.expect;

export class VendorOnboarding {
  siteUrls: siteUrls = new siteUrls();
  userData: userData = new userData();

  vendorOnboardingMenuBtn() {
    browser.wait(until.elementToBeClickable(OnboardingHomePageOR.vendorOnboardingSidebar), 50000, "vendor onboarding is displayed in side menu bar ");
    OnboardingHomePageOR.vendorOnboardingSidebar.click();
  }

  onboardingSettingTileTab() {
    browser.wait(until.visibilityOf(OnboardingHomePageOR.settingTile), 90000, "setting tile is displayed on vendor onboarding landing page");
    OnboardingHomePageOR.settingTile.isDisplayed();
  }

  onboaringSettingTileEditBtnClick() {
    OnboardingHomePageOR.settingTileEditBtn.click();
  }

  onboardingNewRequestTab() {
    OnboardingHomePageOR.newRequestTile.isDisplayed();
  }

  onboardingPendingRequestTab() {
    OnboardingHomePageOR.pendingRequestTile.isDisplayed();
  }

  vendorOnbaordingDisabledMenuBtn() {
    OnboardingHomePageOR.vendorOnbaordingDisabledSidebar.isDisplayed().then((displayed) => {
      expect(displayed).toEqual(true);
    });
    OnboardingHomePageOR.vendorOnbaordingDisabledSidebar.click();
  }

  onboardingSoftwareRequestPopup() {
    OnboardingHomePageOR.softwareRequestPopup.isDisplayed().then((displayed) => {
      expect(displayed).toEqual(true);
    });
  }

  requestCheckboxClick() {
    browser.wait(until.elementToBeClickable(OnboardingHomePageOR.requestCheckBox), 10000, "checkbox is not selected");
    OnboardingHomePageOR.requestCheckBox.click();
  }

  submitRequestBtn() {
    browser.wait(until.elementToBeClickable(OnboardingHomePageOR.softwareSendRequestBtn), 10000, "checkbox is not selected");
    OnboardingHomePageOR.softwareSendRequestBtn.click();
  }

  requestSentPopupConfirmation() {
    browser.wait(until.visibilityOf(OnboardingHomePageOR.requestSentPopup), 50000, "checkbox is not selected");
    OnboardingHomePageOR.requestSentPopup.isDisplayed().then((displayed) => {
      expect(displayed).toEqual(true);
    });
  }

  closePopupClick() {
    OnboardingHomePageOR.requestClosePopup.click();
    browser.wait(until.invisibilityOf(OnboardingHomePageOR.requestSentPopup), 10000, "popup is closed");
  }
}
