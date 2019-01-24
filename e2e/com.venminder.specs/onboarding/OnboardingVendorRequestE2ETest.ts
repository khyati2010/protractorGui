import { VendorOnboarding } from "../../com.venminder.page/onboarding/VendorOnboardingPage";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
import { siteUrls, userData, vendorRequestData } from "../../com.venminder.testdata/TestData";
import { ApprovalSettings } from "../../com.venminder.page/onboarding/OnboardingApprovalSettingsPage";
import * as OnboardingVendorRequestViewTilePage from "../../com.venminder.page/onboarding/OnboardingVendorRequestViewTilePage";
import * as OnboardingVendorRequestPages from "../../com.venminder.page/onboarding/OnboardingVendorRequestPages";
import { browser } from "protractor";

describe("validating create new Vendor Request and View the created request", () => {

    const vendorOnboardingMenu = new VendorOnboarding();
    const siteUrl = new siteUrls();
    const credential = new userData();
    const login = new LoginPage();
    const vendorRequest = new OnboardingVendorRequestPages.vendorRequest;
    const vendorRequestFormDetails = new OnboardingVendorRequestViewTilePage.vendorRequestViewTile;
    const onboardingApprovalSettings = new ApprovalSettings();
    const dataVendorRequest = new vendorRequestData;

    describe("Set categories exempt from approval ", () => {

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

        it("Get all the approvers", () => {
            vendorRequest.getApproverList();
        });

        it("Get all the Exempt Users", () => {
            vendorRequest.getExemptList();
        });

        it("user click on cancel button on approval settings page which navigate back to onboarding landing page", () => {
            onboardingApprovalSettings.clickApprovalSettingsCanclBtn();
        });

        it("logout with admin user", () => {
            login.logoff();
        });
    })

    describe("Verify the setting Title and Enter the Request Information ", () => {

        it("login with admin user", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
        });

        it("validate vendor onboarding is displayed for admin user", () => {
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
        });

        it("user click on click New Request Tab ", () => {
            vendorRequest.clickNewRequestTile();
        });

        it("click Product category Dropdown and select exempt value ", () => {
            vendorRequest.clickProductCategoryExempt();
        });

        it("click Product category Dropdown and select Non-exempt value ", () => {
            vendorRequest.clickProductCategoryNonExempt();
            vendorRequest.clickReasonForRequestExistingProduct();
        });

        it("Validate Requesting bids for existing product or service isSelected ", () => {
            vendorRequest.clickReasonForRequestExistingProductisSelected();
        });

        it("verify the text visible after selecting requesting bids for a existing product/service is Present", () => {
            vendorRequest.getTextBiddingProcess();
        });

        it("Click Request for Request for new Product with Non-exempt category ", () => {
            vendorRequest.clickReasonForRequest();
        });

        it("Verify the Text Visble after selecting Requesting bids for a new product/service is Present", () => {
            vendorRequest.getTextBiddingProcess();
        });

        it("click Yes for Non-Exempt Product Category and Requesting bid for New Product is pre-selected ", () => {
            vendorRequest.clickRadioButtonBiddingProcessYesVerifyCurrentVendorNameDropDown();
        });

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

    describe("Verify pre-populated Information displayed on Request Vendor Page and complete the form ", () => {

        it("Validate Vendor Name Displayed", () => {
            vendorRequest.verifyVendorNameValue(dataVendorRequest.vendorRequest[1]);
        })

        it("Validate Product Type Displayed", () => {
            vendorRequest.verifyProductTypeValue(dataVendorRequest.vendorRequest[0]);
        })

        it("Validate Product Category Displayed", () => {
            vendorRequest.verifyProductCategoryValue(dataVendorRequest.vendorRequest[2]);
        })

        it("Enter the Vendor Request form Mandatory fields ", () => {
            vendorRequestFormDetails.enterProductName();
            vendorRequestFormDetails.enterFirstName();
            vendorRequestFormDetails.enterLastName();
            vendorRequestFormDetails.enterEmailAddress();
            vendorRequestFormDetails.enterAreaCode();
            vendorRequestFormDetails.enterPrefixCode();
            vendorRequestFormDetails.enterSuffixCode();
            vendorRequestFormDetails.enterExtField();
            vendorRequestFormDetails.selectType();
            vendorRequestFormDetails.enterDescription();
            vendorRequestFormDetails.enterAnnualCost();
            vendorRequestFormDetails.enterAnnualVariableCost();
            vendorRequestFormDetails.enterAnnualFixedCost();
            vendorRequestFormDetails.enterTotalSpend();
            vendorRequestFormDetails.enterOneTimeCost();
            vendorRequestFormDetails.enterTerm();
            vendorRequestFormDetails.allQuestions();
            vendorRequestFormDetails.submitForm();
        })

        it("Validate the Success Message for Vendor Request Form Creation", () => {
            vendorRequestFormDetails.successBoxValidation(dataVendorRequest.message[0]);
        })

        it("Click Great Button", () => {
            vendorRequestFormDetails.clickGreatBtn();
        })
    });

    describe("Click on Pending Tile and Verify the New Created Vendor Request ", () => {

        it("Click on View Tile", () => {
            vendorRequestFormDetails.clickViewTile();
        })

        it("Serach the Vendor Request List by Vendor Name", () => {
            vendorRequestFormDetails.enterSerachRequestAsperVendorSelected(dataVendorRequest.vendorRequest[1]);
        })

        it("Get all the Grid Values displayed and validate the Vendor Name being serached", () => {
            vendorRequestFormDetails.getGridValues(dataVendorRequest.vendorRequest[1]);
        })

        it("Assign the Vendor Request ticket having VMO Role", () => {
            vendorRequestFormDetails.assignUser();
        })

        it("Change the Pagination to Maxium", () => {
            vendorRequestFormDetails.setPagination();
        })

        it("Verify VMO Manager selected", () => {
            vendorRequestFormDetails.validateVMOManager();
        })

        it("Search and click Pending Vendor Request", () => {
            vendorRequestFormDetails.searchPendingVendorRequest();
        })

        it("logout with admin user", () => {
            login.logoff();
        });
    });

    describe("Enter the Vendor Request Information for Exempt Type and Validate the approval process", () => {

        it("login with admin user", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
        });

        it("validate vendor onboarding is displayed for admin user", () => {
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
        });

        it("user clicks on New Request Tab ", () => {
            vendorRequest.clickNewRequestTile();
        });

        it("click Product category Dropdown and select exempt value ", () => {
            vendorRequest.clickProductCategoryExempt();
        });

        it("Click Request for new Product with Non-exempt category ", () => {
            vendorRequest.clickReasonForRequest();
        });

        it("Verify the Text Visble after selecting Requesting bids for a new product/service is Present", () => {
            vendorRequest.getTextBiddingProcess();
        });

        it("click Yes for Exempt Product Category and Requesting bid for New Product is pre-selected ", () => {
            vendorRequest.clickRadioButtonBiddingProcessYesVerifyCurrentVendorNameDropDown();
        });

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
            vendorRequest.verifyCategoryTypeDisplayedExempt(dataVendorRequest.vendorRequest[3]);
        })

        it("Validate Vendor Name Displayed", () => {
            vendorRequest.verifyVendorNameValue(dataVendorRequest.vendorRequest[1]);
        })

        it("Validate Product Type Displayed", () => {
            vendorRequest.verifyProductTypeValue(dataVendorRequest.vendorRequest[0]);
        })

        it("Validate Product Category Displayed", () => {
            vendorRequest.verifyProductCategoryValue(dataVendorRequest.vendorRequest[3]);
        })

        it("Enter the Vendor Request form Mandatory fields ", () => {
            vendorRequestFormDetails.enterProductName();
            vendorRequestFormDetails.enterFirstName();
            vendorRequestFormDetails.enterLastName();
            vendorRequestFormDetails.enterEmailAddress();
            vendorRequestFormDetails.enterAreaCode();
            vendorRequestFormDetails.enterPrefixCode();
            vendorRequestFormDetails.enterSuffixCode();
            vendorRequestFormDetails.enterExtField();
            vendorRequestFormDetails.selectType();
            vendorRequestFormDetails.enterDescription();
            vendorRequestFormDetails.enterAnnualCost();
            vendorRequestFormDetails.enterAnnualVariableCost();
            vendorRequestFormDetails.enterAnnualFixedCost();
            vendorRequestFormDetails.enterTotalSpend();
            vendorRequestFormDetails.enterOneTimeCost();
            vendorRequestFormDetails.enterTerm();
            vendorRequestFormDetails.allQuestions();
            vendorRequestFormDetails.submitForm();
        })

        it("Assign a Product Manager", () => {
            vendorRequestFormDetails.selectAssignManager();
        })

        it("Validate the Success Message for Vendor Request Form Creation", () => {
            vendorRequestFormDetails.successBoxValidation(dataVendorRequest.message[0]);
        })

        it("Click Great Button", () => {
            vendorRequestFormDetails.clickGreatBtn();
        })

        it("Click on View Tile", () => {
            vendorRequestFormDetails.clickViewTile();
        })

        it("validate filters displayed on vendor request list", () => {
            vendorRequestFormDetails.filterContainerView();
            vendorRequestFormDetails.selectAssignmentInFilter();
            vendorRequestFormDetails.selectStatus();
            vendorRequestFormDetails.selectRequestDateRange();
            vendorRequestFormDetails.selectDeadlineDateRange();
        })

        it("Search the vendor request list by vendor name", () => {
            vendorRequestFormDetails.enterSerachRequestAsperVendorSelected(dataVendorRequest.vendorRequest[1]);
        })

        it("Get all the Grid Values displayed and validate the Vendor Name being serached", () => {
            vendorRequestFormDetails.getGridValues(dataVendorRequest.vendorRequest[1]);
        })

        it("logout with admin user", () => {
            login.logoff();
        });
    });

    describe("Enter the Request Information without Product category", () => {

        it("login with admin user", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
        });

        it("validate vendor onboarding is displayed for admin user", () => {
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
        });

        it("user click on click New Request Tab ", () => {
            vendorRequest.clickNewRequestTile();
        });

        it("Click Request for Request for new Product with Non-exempt category ", () => {
            vendorRequest.clickReasonForRequest();
        });

        it("Verify the Text Visble after selecting Requesting bids for a new product/service is Present", () => {
            vendorRequest.getTextBiddingProcess();
        });

        it("click Yes for Exempt Product Category and Requesting bid for New Product is pre-selected ", () => {
            vendorRequest.clickRadioButtonBiddingProcessYesVerifyCurrentVendorNameDropDown();
        });

        it("Enter Product Type Field ", () => {
            vendorRequest.enterProductTypeValue(dataVendorRequest.vendorRequest[0]);
        });

        it("Select Current vendor Name ", () => {
            vendorRequest.enterCurrrentVendorName(dataVendorRequest.vendorRequest[1]);
        });

        it("Click Next Button and Validate the landing Page Text isDisplayed ", () => {
            vendorRequest.clickNextButton();
        });

        it("Validate Vendor Name Displayed", () => {
            vendorRequest.verifyVendorNameValue(dataVendorRequest.vendorRequest[1]);
        })

        it("Validate Product Type Displayed", () => {
            vendorRequest.verifyProductTypeValue(dataVendorRequest.vendorRequest[0]);
        })

        it("Enter the Vendor Request form Mandatory fields ", () => {
            vendorRequestFormDetails.enterProductName();
            vendorRequestFormDetails.enterFirstName();
            vendorRequestFormDetails.enterLastName();
            vendorRequestFormDetails.enterEmailAddress();
            vendorRequestFormDetails.enterAreaCode();
            vendorRequestFormDetails.enterPrefixCode();
            vendorRequestFormDetails.enterSuffixCode();
            vendorRequestFormDetails.enterExtField();
            vendorRequestFormDetails.selectType();
            vendorRequestFormDetails.enterDescription();
            vendorRequestFormDetails.enterAnnualCost();
            vendorRequestFormDetails.enterAnnualVariableCost();
            vendorRequestFormDetails.enterAnnualFixedCost();
            vendorRequestFormDetails.enterTotalSpend();
            vendorRequestFormDetails.enterOneTimeCost();
            vendorRequestFormDetails.enterTerm();
            vendorRequestFormDetails.allQuestions();
            vendorRequestFormDetails.submitForm();
        })

        it("Validate the Success Message for Vendor Request Form Assign Manager", () => {
            vendorRequestFormDetails.successBoxValidation(dataVendorRequest.message[0]);
        })

        it("Click Great Button", () => {
            vendorRequestFormDetails.clickGreatBtn();
        })

        it("Click on Pending Tile", () => {
            vendorRequestFormDetails.clickViewTile();
        })

        it("Search the Vendor Request list by vendor name", () => {
            vendorRequestFormDetails.enterSerachRequestAsperVendorSelected(dataVendorRequest.vendorRequest[1]);
        })

        it("Get all the Grid Values displayed and validate the Vendor Name being serached", () => {
            vendorRequestFormDetails.getGridValues(dataVendorRequest.vendorRequest[1]);
        })

        it("logout with admin user", () => {
            login.logoff();
        });
    });

    describe("Validate the missing information Section ", () => {

        it("login with admin user", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
        });

        it("validate vendor onboarding is displayed for admin user", () => {
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
        });

        it("user click on click New Request Tab ", () => {
            vendorRequest.clickNewRequestTile();
        });

        it("click Product category Dropdown and select exempt value ", () => {
            vendorRequest.clickProductCategoryExempt();

        });

        it("Enter Product Type Field ", () => {
            vendorRequest.enterProductTypeValue(dataVendorRequest.vendorRequest[0]);
        });

        it("select Reason for request ", () => {
            vendorRequest.clickReasonForRequestExistingProduct();
        });

        it("Click Next Button and Validate the landing Page Text isDisplayed ", () => {
            vendorRequest.clickNextButtonExitingProduct();
        });

        it("Enter the Vendor Request form Mandatory fields ", () => {
            vendorRequestFormDetails.enterSiteURL();
            vendorRequestFormDetails.enterAddress();
            vendorRequestFormDetails.enterAddress2();
            vendorRequestFormDetails.submitForm();
        })

        it("Validate the Missing Information section ", () => {
            vendorRequestFormDetails.validateMissingInformation();
        });
    });
});
