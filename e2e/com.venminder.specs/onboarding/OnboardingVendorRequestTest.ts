import { VendorOnboarding } from "../../com.venminder.page/onboarding/VendorOnboardingPage";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
import { masterFormSection, siteUrls, userData, vendorRequestData } from "../../com.venminder.testdata/TestData";
import { ApprovalSettings } from "../../com.venminder.page/onboarding/OnboardingApprovalSettingsPage";
import * as OnboardingVendorRequestPages from "../../com.venminder.page/onboarding/OnboardingVendorRequestPages";

describe("validating the functionality for vendor Request", () => {

    const vendorOnboardingMenu = new VendorOnboarding();
    const siteUrl = new siteUrls();
    const credential = new userData();
    const login = new LoginPage();
    const onboardingApprovalSettings = new ApprovalSettings();
    const vendorRequest = new OnboardingVendorRequestPages.vendorRequest;
    let dataVendorRequest = new vendorRequestData;
    let masterFormSection1 = new masterFormSection;

    describe("Verify the setting Title and Returns Approvers and Exempt categories ", () => {

        it("login with admin user", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
        });

        it("validate vendor onboarding is displayed for admin user", () => {
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
        });

        it("user is navigated to onboarding forms tab", () => {
            vendorOnboardingMenu.onboardingSettingTileTab();
            vendorOnboardingMenu.onboaringSettingTileEditBtnClick();
        });

        it("verify all the displayed webElement", () => {
            onboardingApprovalSettings.approverSettingsContent();
        });

        it("Get all the Approvers", () => {
            vendorRequest.getApproverList();
        });

        it("Get all the Exempt Users", () => {
            vendorRequest.getExemptList();
        });

        it("user click on cancel button on approval settings page which navigate back to onboarding landing page", () => {
            onboardingApprovalSettings.clickApprovalSettingsCanclBtn();
        });
    });

    describe("Verify the New Title and Validate the Exempt categories ", () => {

        it("user click on click New Request Tab ", () => {
            vendorRequest.clickNewRequestTile();
        });

        it("click Product category Dropdown and select exempt value ", () => {
            vendorRequest.clickProductCategoryExempt();
        });
    });

    describe("Verify current or active vendor be included in the bidding process option is displayed", () => {

        it("Requesting bids for new product/service ", () => {
            vendorRequest.clickReasonForRequestNewProduct();
        });

        it("Verify the Text Visble after selecting Requesting bids for a new product/service ", () => {
            vendorRequest.getTextBiddingProcess();
        });
    });

    describe("Verify Will a current or active vendor be included in the bidding process option is not getting displayed after selecting existing Product", () => {

        it("Requesting bids for existing product/service ", () => {
            vendorRequest.clickReasonForRequestExistingProduct();
        });

        it("Verify the Text Visble after selecting Requesting bids for a existing product/service ", () => {
            vendorRequest.getTextBiddingProcessNotDisplayed();
        });
    });

    describe("Validate the Non-Exempt Productcategories for existing Product ", () => {

        it("click Product category Dropdown and select Non-exempt value ", () => {
            vendorRequest.clickProductCategoryNonExempt();
            vendorRequest.clickReasonForRequestExistingProduct();
        });

        it("Validate Requesting bids for existing product or service isSelected ", () => {
            vendorRequest.clickReasonForRequestExistingProductisSelected();
        });

        it("Verify the Text Visble after selecting Requesting bids for a existing product/service is Present", () => {
            vendorRequest.getTextBiddingProcess();
        });
    });

    describe("Validate the Non-Exempt Product categories for new Product ", () => {

        it("Click Request for Request for new Product with Non-exempt category ", () => {
            vendorRequest.clickReasonForRequest();
        });

        it("Verify the Text Visble after selecting Requesting bids for a new product/service is Present", () => {
            vendorRequest.getTextBiddingProcess();
        });
    });

    describe("Validate the behaviour when current and active vendor be included is set to yes", () => {

        it("click Yes for Non-Exempt Product Category and Requesting bid for New Product is pre-selected ", () => {
            vendorRequest.clickRadioButtonBiddingProcessYesVerifyCurrentVendorNameDropDown();
        });

        it("click Yes for Exempt Product Category and Requesting bid for New Product is pre-selected ", () => {
            vendorRequest.clickRadioButtonBiddingProcessYesVerifyCurrentVendorNameDropDown();
        });
    });

    describe("Enter ProductType field and select Current Vendor Name ", () => {

        it("Enter Product Type Field ", () => {
            vendorRequest.enterProductTypeValue(dataVendorRequest.vendorRequest[0]);
        });

        it("Select Current vendor Name ", () => {
            vendorRequest.enterCurrrentVendorName(dataVendorRequest.vendorRequest[1]);
        });

        it("Click Next Button and Validate the landing Page Text isDisplayed ", () => {
            vendorRequest.clickNextButton();
        });

        it("Validate the Seb Section header along with Category field", () => {
            vendorRequest.verifyCategoryTypeDisplayed(dataVendorRequest.vendorRequest[2]);
        })
    });

    describe("Verify  pre-populated Information displayed on Request Vendor Page ", () => {
        it("Validate Vendor Name Displayed", () => {
            vendorRequest.verifyVendorNameValue(dataVendorRequest.vendorRequest[1]);
        })

        it("Validate Product Type Displayed", () => {
            vendorRequest.verifyProductTypeValue(dataVendorRequest.vendorRequest[0]);
        })

        it("Validate Product Category Displayed", () => {
            vendorRequest.verifyProductCategoryValue(dataVendorRequest.vendorRequest[2]);
        })
    });

    describe("Verify Add Vendor Button is clickable ", () => {

        it("click Vendor Button and Validate the next window populated", () => {
            vendorRequest.verifyAddVendorBtn();
        })
    });

    describe("Verify Product Information Section, Pricing Information section ", () => {

        it("Verify All the fields displayed under Product Information Section", () => {
            vendorRequest.validateProductInformation();
        })

        it("Verify All the fields displayed under Pricing Information Section", () => {
            vendorRequest.verifyPricingInformation();
        })

        it("Validate Critical Questions", () => {
            vendorRequest.getCriticalQuestionsList(masterFormSection1.criticalQuestionsList);
        })

        it("Validate Risk Assessment Questions", () => {
            vendorRequest.getRiskAssessmentQuestionList(dataVendorRequest.riskAssessmentList);
        })
    });
});