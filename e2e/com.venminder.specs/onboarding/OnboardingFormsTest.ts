import { VendorOnboardingForm } from "../../com.venminder.page/onboarding/OnboardingFormsPage";
import { VendorOnboarding } from "../../com.venminder.page/onboarding/VendorOnboardingPage";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
import { masterFormSection, siteUrls, userData } from "../../com.venminder.testdata/TestData";

describe("validating the functionality for vendor onboarding forms ", () => {
    const OnboardingForm = new VendorOnboardingForm();
    const vendorOnboardingMenu = new VendorOnboarding();
    const siteUrl = new siteUrls();
    const credential = new userData();
    const login = new LoginPage();
    const masterFormSection1 = new masterFormSection();

    it("login with admin user", () => {
        login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
    });

    it("validate vendor onboarding is displayed for admin user", () => {
        vendorOnboardingMenu.vendorOnboardingMenuBtn();
    });

    it("user is navigated to onboarding forms tab", () => {
        vendorOnboardingMenu.onboardingSettingTileTab();
        vendorOnboardingMenu.onboaringSettingTileEditBtnClick();
        OnboardingForm.clickOnboardingFormsTab();
    });

    it("user validate onboarding forms sections is displayed with default content", () => {
        OnboardingForm.onboardingFormsSectionContent();
    });

    it("user validate action button options for default active master form", () => {
        OnboardingForm.clickMasterFormActionBtn();
    });

    describe("validation for view master form", () => {

        it("user click on view in master form action tab", () => {
            OnboardingForm.clickActionViewBtn();
        });

        it("validate user is naviagted to view master form popup", () => {
            OnboardingForm.viewMasterFormPopup();
        });

    });

    describe("validation for create new master form", () => {

        it("user click on add new master form", () => {
            OnboardingForm.clickAddNewMasterFormBtn();
        });

        it("user validate all the section of master form", () => {

            OnboardingForm.getvendorInformationSectionContent(masterFormSection1.vendorInformationSection);
            OnboardingForm.getProductInformationSectionContent(masterFormSection1.productInformationSection);
            OnboardingForm.getPricingInformationSectionContent(masterFormSection1.pricingInformationSection);
            OnboardingForm.getCriticalQuestionsList(masterFormSection1.criticalQuestionsList);
            OnboardingForm.addFieldModal(masterFormSection1.customFieldLblNames[0]);
        });

        it("user save master form", () => {
            OnboardingForm.clickSaveFormBtn(masterFormSection1.clientMasterForm);
        });
    });

    describe("validation for clone to custom form", () => {

        it("user naviagte using clone to custom form button from active master form ", () => {
            OnboardingForm.cloneToCustomForm();
        });

        it("validation for custom form name and product category", () => {
            OnboardingForm.validateDisabledSaveFormBtn();
            OnboardingForm.createCustomFormFieldValidation(masterFormSection1.formNames[0]);
            OnboardingForm.customFormPostAddValidation(masterFormSection1.formNames[0]);
        });
    });

    describe("validation for make active disabled master form", () => {

        it("validation for making disable master form active", () => {
            OnboardingForm.makeMasterFormActive();
        });
    });

    describe("validation for add new custom form", () => {

        it("add custom form from add new custom form", () => {
            OnboardingForm.addNewCustomForm();
            OnboardingForm.validateDisabledSaveFormBtn();
            OnboardingForm.createCustomFormFieldValidation(masterFormSection1.formNames[1]);
            OnboardingForm.customFormPostAddValidation(masterFormSection1.formNames[1]);
        });
    });

    describe("validation for view custom form", () => {

        it("user validate view custom form", () => {
            OnboardingForm.clickCustomFormActionBtn();
            OnboardingForm.viewCustomForm();
        });
    });

    describe("validation for edit custom form", () => {

        it("user validate edit custom form", () => {
            OnboardingForm.clickCustomFormActionBtn();
            OnboardingForm.editCustomForm(masterFormSection1.formNames[2]);
            OnboardingForm.customFormPostAddValidation(masterFormSection1.formNames[2]);
        });

        it("validation for duplicate form with same name", () => {
            OnboardingForm.duplicateFormNameValidation();
        });
    });

    describe("validation for delete custom form", () => {

        it("user validate delete custom form", () => {
            OnboardingForm.deleteCustomForm();
        });
    });
});
