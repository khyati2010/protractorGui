import { browser, protractor } from "protractor";
import { OnboardingFormsOR } from "../../com.venminder.page_object/onboarding/OnboardingFormsOR";
import { masterFormSection } from "../../com.venminder.testdata/TestData";
const chai = require("chai").use(require("chai-as-promised"));
const until = protractor.ExpectedConditions;
const expect = chai.expect;

export class VendorOnboardingForm {
    masterFormSection: masterFormSection = new masterFormSection();

    clickOnboardingFormsTab() {
        browser.wait(until.elementToBeClickable(OnboardingFormsOR.onboardingFormsTab), 50000, "onboarding form tab is clicked ");
        OnboardingFormsOR.onboardingFormsTab.click();
    }

    onboardingFormsSectionContent() {
        browser.wait(until.visibilityOf(OnboardingFormsOR.masterFormTable), 30000, "forms table is displayed");
        OnboardingFormsOR.masterFormTable.isDisplayed(), OnboardingFormsOR.customFormTable.isDisplayed().then((isDisplayed) => {
            expect(isDisplayed).to.equal(true);
        });
    }

    clickMasterFormActionBtn() {
        OnboardingFormsOR.masterFormActionBtn.click();
        OnboardingFormsOR.masterFormActionViewBtn.isDisplayed(),
            OnboardingFormsOR.masterFormActionCloneBtn.isDisplayed().then((isDisplayed) => {
                expect(isDisplayed).to.equal(true);
            });
    }

    clickCustomFormActionBtn() {
        OnboardingFormsOR.customFormActionBtn.click();
        OnboardingFormsOR.customFormActionCloneBtn.isDisplayed(), OnboardingFormsOR.customFormActionDeleteBtn.isDisplayed(),
            OnboardingFormsOR.customFormActionEditBtn.isDisplayed(),
            OnboardingFormsOR.customFormActionViewBtn.isDisplayed().then((isDisplayed) => {
                expect(isDisplayed).to.equal(true);
            });
    }

    clickAddNewMasterFormBtn() {
        browser.wait(until.elementToBeClickable(OnboardingFormsOR.addNewMasterFormBtn), 10000, "click on add new master form");
        OnboardingFormsOR.addNewMasterFormBtn.click();
    }

    getvendorInformationSectionContent(item: any) {
        OnboardingFormsOR.vendorInformationSection.getText().then((text) => {
            const vendorInformationCount = text[0].split("\n");
            for (let i = 0; i < vendorInformationCount.length; i++) {
                expect(vendorInformationCount[i].trim()).to.equal(item[i]);
            }
        });
    }

    getProductInformationSectionContent(item: any) {
        OnboardingFormsOR.productInformationSection.getText().then((text) => {
            const productInformationCount = text[0].split("\n");
            for (let i = 0; i < productInformationCount.length; i++) {
                expect(productInformationCount[i].trim()).to.equal(item[i]);
            }
        });
    }

    getPricingInformationSectionContent(item: any) {
        OnboardingFormsOR.pricingInformationSection.getText().then((text) => {
            const pricingInformationCount = text[0].split("\n");
            for (let i = 0; i < pricingInformationCount.length; i++) {
                expect(pricingInformationCount[i].trim()).to.equal(item[i]);
            }
        });
    }

    getCriticalQuestionsList(item: any) {

        OnboardingFormsOR.criticalQuestionSection.getText().then((text) => {
            const questionCount = text[0].split("\n");
            for (let i = 0; i < questionCount.length; i++) {
                expect(questionCount[i].trim()).to.equal(item[i]);
            }
        });
    }

    clickSaveFormBtn(item: string) {
        browser.wait(until.elementToBeClickable(OnboardingFormsOR.saveFormBtn), 1000, "click on save master form");
        OnboardingFormsOR.saveFormBtn.click();
        browser.wait(until.visibilityOf(OnboardingFormsOR.masterFormTable), 30000, "forms table is displayed");
        OnboardingFormsOR.clientMasterForm.getText().then((text) => {
            expect(text).to.equal(item);
        });
    }

    clickActionViewBtn() {
        browser.wait(until.visibilityOf(OnboardingFormsOR.masterFormActionBtn), 10000, "view option in displayed in action dropdown");
        OnboardingFormsOR.masterFormActionViewBtn.click();
    }

    viewMasterFormPopup() {
        browser.wait(until.visibilityOf(OnboardingFormsOR.viewMasterForm), 30000, "master form popup is displayed");
        OnboardingFormsOR.viewMasterForm.isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
        });
        OnboardingFormsOR.closeViewMasterForm.click();
    }

    addFieldModal(item: string) {
        browser.wait(until.elementToBeClickable(OnboardingFormsOR.pricingSectionAddFieldBtn), 10000, "click on add field is displayed");
        OnboardingFormsOR.pricingSectionAddFieldBtn.click();
        browser.wait(until.visibilityOf(OnboardingFormsOR.addFieldModalPopup), 9000, "add field modal popup is displayed");
        OnboardingFormsOR.addFieldModalPopup.isDisplayed().then(() => {
            OnboardingFormsOR.addFieldLblInput.sendKeys(item);
            OnboardingFormsOR.addFieldSubmitBtn.click();
        });

        browser.wait(until.visibilityOf(OnboardingFormsOR.masterFormTitle), 10000, "master form is loaded");
        let found = false;
        OnboardingFormsOR.pricingInformationSection.getText().then((text) => {
            const pricingInformationCount = text[0].split("\n");
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < pricingInformationCount.length; i++) {
                if (pricingInformationCount[i] === item) {
                    found = true;
                    break;
                }
            }
            expect(found).to.equal(true);
        });
        OnboardingFormsOR.customFieldcloseBtn.click();
    }

    cloneToCustomForm() {
        browser.wait(until.elementToBeClickable(OnboardingFormsOR.masterFormActionBtn), 3000, "master form action button is clickable");
        OnboardingFormsOR.masterFormActionBtn.click();
        OnboardingFormsOR.masterFormActionCloneBtn.isDisplayed().then(() => {
            OnboardingFormsOR.masterFormActionCloneBtn.click().then(() => {
                OnboardingFormsOR.formNameInputBoxCloneToCustom.isDisplayed().then((displayed) => {
                    expect(displayed).to.equal(true);
                });
            });
        });
    }

    validateDisabledSaveFormBtn() {
        browser.wait(until.visibilityOf(OnboardingFormsOR.saveFormBtn), 1000, "save button is displayed");
        OnboardingFormsOR.saveFormBtn.isEnabled().then((enabled) => {
            expect(enabled).to.equal(false);
        });
    }
    createCustomFormFieldValidation(item: string) {
        browser.wait(until.elementToBeClickable(OnboardingFormsOR.formNameInputBoxCloneToCustom), 10000, "input field is clickable");
        OnboardingFormsOR.formNameInputBoxCloneToCustom.sendKeys(item);
        OnboardingFormsOR.categoryDropdown.click();
        OnboardingFormsOR.selectCategoriesDropdown.getText().then((text) => {
            const categoriesCount = text[0].split("\n");
            if (categoriesCount.length > 0) {
                OnboardingFormsOR.firstCategoryDropdown.click();
            }
            OnboardingFormsOR.saveFormBtn.isEnabled().then((enabled) => {
                expect(enabled).to.equal(true);
            });
            OnboardingFormsOR.saveFormBtn.click();
            browser.wait(until.visibilityOf(OnboardingFormsOR.customFormTable), 10000, "custom form table displayed");
            expect(OnboardingFormsOR.customFormTable.isDisplayed());
        });
    }

    customFormPostAddValidation(item: string) {
        let found = false;
        browser.wait(until.visibilityOf(OnboardingFormsOR.customFormTable), 30000, "custom form table is displayed");
        browser.sleep(500);
        OnboardingFormsOR.customFormsNamesInTable.count().then((size) => {
            OnboardingFormsOR.customFormsNamesInTable.getText().then((text) => {
                for (let i = 0; i < size; i++) {
                    if (text[i] === item) {
                        found = true;
                        break;
                    }
                }
                expect(found).to.equal(true);
            });
        });
    }

    addNewCustomForm() {
        browser.wait(until.invisibilityOf(OnboardingFormsOR.loader), 3000, "page loading");
        browser.sleep(1000);
        browser.wait(until.elementToBeClickable(OnboardingFormsOR.addNewCustomFormBtn), 3000, "add new custom form button is displayed");
        OnboardingFormsOR.addNewCustomFormBtn.click();
    }

    viewCustomForm() {
        browser.wait(until.elementToBeClickable(OnboardingFormsOR.customFormActionViewBtn), 10000, "click on view custom form");
        OnboardingFormsOR.customFormActionViewBtn.click();
        browser.wait(until.visibilityOf(OnboardingFormsOR.viewMasterForm), 20000, "custom form view modal is displayed");
        OnboardingFormsOR.viewMasterForm.isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
        });
        OnboardingFormsOR.customFormViewCancelBtn.click();
    }

    editCustomForm(formName: string) {
        browser.wait(until.elementToBeClickable(OnboardingFormsOR.customFormActionViewBtn), 10000, "click on view custom form");
        OnboardingFormsOR.customFormActionEditBtn.click();
        OnboardingFormsOR.viewMasterForm.isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
        });
        OnboardingFormsOR.editFormNameInput.clear().then(() => {
            OnboardingFormsOR.editFormNameInput.sendKeys(formName);
        });
        OnboardingFormsOR.saveFormBtn.click();
    }

    duplicateFormNameValidation() {
        let found = false;
        browser.wait(until.visibilityOf(OnboardingFormsOR.customFormTable), 30000, "custom form table is displayed");
        browser.sleep(500);
        OnboardingFormsOR.customFormsNamesInTable.count().then((size) => {
            OnboardingFormsOR.customFormsNamesInTable.getText().then((text) => {
                for (let i = 0; i < size; i++) {
                    for (let j = i + 1; j < size; j++) {
                        if (text[i] === text[j]) {
                            found = true;
                            break;
                        }
                    }
                }
                expect(found).to.equal(false);

            });
        });
    }

    deleteCustomForm() {
        let formDeleted = false;
        let deletedFormName;
        OnboardingFormsOR.customFormsNamesInTable.count().then(() => {
            OnboardingFormsOR.customFormsNamesInTable.getText().then((text) => {
                deletedFormName = text[1];
            });
            OnboardingFormsOR.customFormActionBtn.click();
            browser.wait(until.elementToBeClickable(OnboardingFormsOR.customFormActionDeleteBtn), 10000, "delete button is clickable");
            OnboardingFormsOR.customFormActionDeleteBtn.click();
            browser.wait(until.visibilityOf(OnboardingFormsOR.deleteCustomFormodal), 5000, "delete modal is not displayed");
            OnboardingFormsOR.deleteCustomFormodal.isDisplayed().then(() => {
                OnboardingFormsOR.deleteFormAcknowldgChkbox.click();
                browser.wait(until.elementToBeClickable(OnboardingFormsOR.deleteCustomFormModalBtn), 1000, "delete button is not enabled");
                OnboardingFormsOR.deleteCustomFormModalBtn.click();
            });
            OnboardingFormsOR.customFormsNamesInTable.count().then((size) => {
                OnboardingFormsOR.customFormsNamesInTable.getText().then((text) => {
                    for (let i = 0; i < size; i++) {
                        for (let j = i + 1; j < size; j++) {
                            if (text[i] === deletedFormName) {
                                formDeleted = true;
                                break;
                            }
                        }
                    }
                });
            });
            expect(formDeleted).to.equal(false);
        });
    }

    makeMasterFormActive() {
        browser.wait(until.elementToBeClickable(OnboardingFormsOR.disabledMasterFormActionBtn), 3000, "click i=on action button for disabled form");
        OnboardingFormsOR.disabledMasterFormActionBtn.click();
        OnboardingFormsOR.makeActiveActionBtn.isDisplayed().then(() => {
            OnboardingFormsOR.makeActiveActionBtn.click();
            browser.wait(until.visibilityOf(OnboardingFormsOR.makeActiveMasterFormModal), 1000, "master form active modal not displayed");
            OnboardingFormsOR.makeActiveMasterFormModal.isDisplayed().then(() => {
                OnboardingFormsOR.makeActiveMasterFormSubmitBtn.click();
            });
        });
    }

}
