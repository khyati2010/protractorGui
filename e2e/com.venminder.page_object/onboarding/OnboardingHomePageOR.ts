import { by, element } from "protractor";

export class OnboardingHomePageOR {

  static vendorOnboardingSidebar = element(by.xpath("//*[contains(text(),'Vendor Onboarding')]"));
  static vendorOnbaordingDisabledSidebar = element(by.xpath("//*[@class='text-primary' and contains(text(),'Vendor OnBoarding')]"));
  static settingTile = element(by.xpath("//router-view/div[1]/div/div/div/div[2]/div/div/div/div[1]"));
  static settingTileEditBtn = element(by.id("vo-settings_edit-btn"));
  static newRequestTile = element(by.xpath("//router-view/div[1]/div/div/div/div[2]/div/div/div/div[2]"));
  static pendingRequestTile = element(by.xpath("//router-view/div[1]/div/div/div/div[2]/div/div/div/div[3]"));
  static softwareRequestPopup = element(by.xpath("//*[@id='software-upgrade']/div/div"));
  static softwareSendRequestBtn = element(by.xpath("//*[@id='software-upgrade']/div/div/div[3]/div/button[1]"));
  static requestSentPopup = element(by.xpath("//*[@id='software-upgrade-confirm']/div/div"));
  static requestCheckBox = element(by.id("EnableDisableSendCheckbox"));
  static requestClosePopup = element(by.xpath("//*[@id='software-upgrade-confirm']/div/div/div[3]/button"));
}
