import { VendorOnboarding } from "../../com.venminder.page/onboarding/VendorOnboardingPage";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
import { masterFormSection, siteUrls, userData, vendorRequestData } from "../../com.venminder.testdata/TestData";
import * as OnboardingRequestViewPages from "../../com.venminder.page/onboarding/OnboardingRequestViewPages";
import * as OnboardingVendorRequestViewTilePage from "../../com.venminder.page/onboarding/OnboardingVendorRequestViewTilePage";

describe("Validation of Request View Page and functionalities", () => {

    const vendorOnboardingMenu = new VendorOnboarding();
    const siteUrl = new siteUrls();
    const credential = new userData();
    const login = new LoginPage();
    const vendorRequestFormDetails = new OnboardingVendorRequestViewTilePage.vendorRequestViewTile;
    const vendorRequestView = new OnboardingRequestViewPages.vendorRequestView;
    const dataVendorRequest = new vendorRequestData;

    describe("Validation of View Btn Functionality and verify the status tab as default ", () => {

        it("login with admin user", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
        });

        it("validate vendor onboarding is displayed for admin user", () => {
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
        });

        it("Click on View Tile", () => {
            vendorRequestFormDetails.clickViewTile();
        })

        it("Serach the Vendor Request List by Vendor Name", () => {
            vendorRequestFormDetails.enterSerachRequestAsperVendorSelected(dataVendorRequest.vendorRequest[1]);
        })

        it("Get all the Grid Values displayed and validate the Vendor Name being serached", () => {
            vendorRequestFormDetails.getGridValues(dataVendorRequest.vendorRequest[1]);
        })

        it("Click on Assign Btn and navigate to request view page", () => {
            vendorRequestView.navigateToRequestView();
        })
    });
});