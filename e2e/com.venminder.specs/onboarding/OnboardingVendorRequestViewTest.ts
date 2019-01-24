import { VendorOnboarding } from "../../com.venminder.page/onboarding/VendorOnboardingPage";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
import { siteUrls, userData, vendorRequestData } from "../../com.venminder.testdata/TestData";
import * as OnboardingRequestViewPages from "../../com.venminder.page/onboarding/OnboardingRequestViewPages";
import * as OnboardingVendorRequestViewTilePage from "../../com.venminder.page/onboarding/OnboardingVendorRequestViewTilePage";
import { OnboardingVendorRequestStatusTabPage } from "../../com.venminder.page/onboarding/OnboardingVendorRequestStatusTabPage"
import { browser } from "protractor";

describe("Validation of Request View Page and functionalities", () => {

    const vendorOnboardingMenu = new VendorOnboarding();
    const siteUrl = new siteUrls();
    const credential = new userData();
    const login = new LoginPage();
    const vendorRequestFormDetails = new OnboardingVendorRequestViewTilePage.vendorRequestViewTile;
    const vendorRequestView = new OnboardingRequestViewPages.vendorRequestView;
    const dataVendorRequest = new vendorRequestData;
    const vendorRequestStatusTab = new OnboardingVendorRequestStatusTabPage;

    describe("Validation of View Btn Functionality and verify the status tab as default ", () => {

        it("login with admin user", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
        });

        it("validate vendor onboarding is displayed for admin user", () => {
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
        });

        it("Click on View Tile", () => {
            vendorRequestFormDetails.clickViewTile();
        });

        it("Search the Vendor Request List by Vendor Name", () => {
            vendorRequestFormDetails.enterSearchRequestAsperVendorSelected(dataVendorRequest.vendorRequest[1]);
        });

        it("Get all the Grid Values displayed and validate the Vendor Name being searched", () => {
            vendorRequestFormDetails.getGridValues(dataVendorRequest.vendorRequest[1]);
        });

        it("Click on Assign Btn and navigate to request view page", () => {
            vendorRequestView.navigateToRequestView();
        });

        it("logout with admin user", () => {
            login.logoff();
        });
    });

    describe("validation for status tab sections in vendor request", () => {

        it("login with admin user", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
        });

        it("validation for vendor information in status tab of vendor request", () => {
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
            vendorRequestFormDetails.clickViewTile();
            vendorRequestView.navigateToRequestView();
            vendorRequestStatusTab.vendorInformationSection();
        });

        it("validation for VMO information in status tab of vendor request", () => {
            vendorRequestStatusTab.vmoInformationSection();
        });

        it("validation for Notes section in status bar of vendor request", () => {
            vendorRequestStatusTab.addNotesSection();
        });

        it("validation for requirement status of vendor request", () => {
            vendorRequestStatusTab.requirementStatusSection();
        })

        it("logout with admin user", () => {
            login.logoff();
        });

    })
});
