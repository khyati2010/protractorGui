import { ApprovalSettings } from "../../com.venminder.page/onboarding/OnboardingApprovalSettingsPage";
import { VendorOnboarding } from "../../com.venminder.page/onboarding/VendorOnboardingPage";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
import { siteUrls, userData } from "../../com.venminder.testdata/TestData";

describe("validating the functionality for vendor onbaording approval settings tab functionality", () => {
    const onboardingApprovalSettings = new ApprovalSettings();
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

    it("user is navigated to onboarding setting tab", () => {
        vendorOnboardingMenu.onboardingSettingTileTab();
        vendorOnboardingMenu.onboaringSettingTileEditBtnClick();
    });

    it("validate approval settings tab content", () => {
        onboardingApprovalSettings.approverSettingsContent();

    });

    it("user click on cancel button on approval settings page which navigate back to onboarding landing page", () => {
        onboardingApprovalSettings.clickApprovalSettingsCanclBtn();
        vendorOnboardingMenu.onboardingSettingTileTab();
    });

    describe("validation for approvers dropdown", () => {

        it("user click on approvers dropdwon", () => {
            vendorOnboardingMenu.onboaringSettingTileEditBtnClick();
            onboardingApprovalSettings.clickApproversDropdownBtn();
        });
    });

    describe("validation for vendor onboarding ON/OFF", () => {

        it("user validate inline message for minimum user requirement when user are less than two", () => {
            onboardingApprovalSettings.selectedApproversUncheck();
            onboardingApprovalSettings.selectMinApproverValidation();
        });

        it("user validate vendor onboarding ON modal", () => {
            onboardingApprovalSettings.clickApproversDropdownBtn();
            onboardingApprovalSettings.onboardingONValidation();
        });

        it("user validate vendor onboarding OFF modal", () => {
            onboardingApprovalSettings.vendorOnboardingtoggleOnOffClick();
        });
    });

});
