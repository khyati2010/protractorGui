import { VendorOnboardingForm } from "../../com.venminder.page/onboarding/OnboardingFromsPage";
import { VendorOnboarding } from "../../com.venminder.page/onboarding/VendorOnboardingPage";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
import {
  siteUrls,
  userData,
  masterFormSection
} from "../../com.venminder.utilities/TestData";

describe("validating the functionality for vendor onboarding forms ", function() {
  let OnboardingForm = new VendorOnboardingForm();
  let vendorOnboardingMenu = new VendorOnboarding();
  let siteUrl = new siteUrls();
  let credential = new userData();
  let login = new LoginPage();
  let masterFormSection1 = new masterFormSection();

  it("login with admin user", function() {
    login.openUrl(siteUrl.sand_dev_2_url);
    login.signIn(credential.admin_username, credential.password);
  });

  it("validate vendor onboarding is displayed for admin user", function() {
    vendorOnboardingMenu.vendorOnboardingMenuBtn();
  });

  it("user is navigated to onboarding forms tab", function() {
    vendorOnboardingMenu.onboardingSettingTileTab();
    vendorOnboardingMenu.onboaringSettingTileEditBtnClick();
    OnboardingForm.clickOnboardingFormsTab();
  });

  it("user validate onboarding forms sections is displayed with default content", function() {
    OnboardingForm.onboardingFormsSectionContent();
  });

  it("user validate action button options for default active master form", function() {
    OnboardingForm.clickMasterFormActionBtn();
  });

  it("user validate action button option for custom form", function() {
    OnboardingForm.clickCustomFormActionBtn();
  });

  describe("validation for create new master form", function() {
    it("user click on add new master form", function() {
      OnboardingForm.clickAddNewMasterFormBtn();
    });

    it("user validate all the section of master form", function() {
      OnboardingForm.getvendorInformationSectionContent(
        masterFormSection1.vendorInformationSection
      );
      OnboardingForm.getProductInformationSectionContent(
        masterFormSection1.productInformationSection
      );
      OnboardingForm.getPricingInformationSectionContent(
        masterFormSection1.pricingInformationSection
      );
    });

    it("user save master form", function() {
      OnboardingForm.clickSaveFormBtn(masterFormSection1.clientMasterForm);
    });
  });
});
