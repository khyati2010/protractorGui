import { VendorOnboarding } from "../../com.venminder.page/onboarding/VendorOnboardingPage";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
import { OnboardingHomePageOR } from "../../com.venminder.page_object/onboarding/OnboardingHomePageOR";
import { siteUrls, userData } from "../../com.venminder.testdata/TestData";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

describe("validating the functionality for vendor onboarding landing page", () => {
    const vendorOnboardingMenu = new VendorOnboarding();
    const siteUrl = new siteUrls();
    const credential = new userData();
    const login = new LoginPage();

    it("login with admin user", () => {
        login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
    });

    it("validate vendor onboarding is displayed for admin user", () => {
        vendorOnboardingMenu.vendorOnboardingMenuBtn();
    });

    it("validate tile view is being displayed", () => {
        vendorOnboardingMenu.onboardingSettingTileTab();
        vendorOnboardingMenu.onboardingNewRequestTab();
        vendorOnboardingMenu.onboardingPendingRequestTab();
        login.logoff();

    });

    it("login with VMO role user", () => {
        login.commonLogin(siteUrl.sand_dev_2_url, credential.VMO_username, credential.password);
    });

    it("validate vendor onboarding is displayed for admin user", () => {
        vendorOnboardingMenu.vendorOnboardingMenuBtn();
    });

    it("validate tile view is being displayed", () => {
        vendorOnboardingMenu.onboardingSettingTileTab();
        vendorOnboardingMenu.onboardingNewRequestTab();
        vendorOnboardingMenu.onboardingPendingRequestTab();
        login.logoff();
    });

    describe("validating functionality for disable onbaording menu", () => {

        it("login with a user without onboarding software", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.username_onboarding, credential.password);
        });

        it("validate onboarding is in disabled state", () => {
            vendorOnboardingMenu.vendorOnbaordingDisabledMenuBtn();
        });

        it("validate software request popup for disabled onbaording service on click", () => {
            vendorOnboardingMenu.onboardingSoftwareRequestPopup();
        });

        it("submit request for software", () => {
            vendorOnboardingMenu.requestCheckboxClick();
            vendorOnboardingMenu.submitRequestBtn();
            vendorOnboardingMenu.requestSentPopupConfirmation();
            vendorOnboardingMenu.closePopupClick();
            login.generalUserLogoff();
        });
    });

    describe("validation for no displaying Vendor Onboarding for general users", () => {

        it("login with general user", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.general_username, credential.general_user_pswd);
        });

        it("validate vendor onboarding will not be displayed for general user", () => {
            expect(OnboardingHomePageOR.vendorOnboardingSidebar.isPresent()).to.become(false);
            login.generalUserLogoff();
        });
    });

});
