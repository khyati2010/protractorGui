import { OnboardingVendorRequestOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestOR";
import { by, element, ElementArrayFinder, browser, protractor } from "protractor";

const chai = require("chai").use(require("chai-as-promised"));
const until = protractor.ExpectedConditions;
const expect = chai.expect;
var exemptList;

export class vendorRequest {

    getApproverList() {
        OnboardingVendorRequestOR.getApprovalList.getText().then((approvalList) => {
            return approvalList;
        })
    }

    public getExemptList() {
        OnboardingVendorRequestOR.getExemptList.getText().then((ExemptList) => {
            const getExemptSize = ExemptList[0].split(",");
            for (let i = 0; i < getExemptSize.length; i++) {
                exemptList = getExemptSize[i].toString();
            }
            return exemptList;
        })
    }
    clickNewRequestTile() {
        OnboardingVendorRequestOR.clickNewRequestTile.click().then(() => {
            OnboardingVendorRequestOR.bannerTitle.isDisplayed().then((Displayed) => {
                expect(Displayed).to.equal(true);
            })
        });
    }

    clickProductCategoryExempt() {
        OnboardingVendorRequestOR.dropdownProductCategory.click().then(() => {
            OnboardingVendorRequestOR.getDropdownValues.getText().then((allValues) => {
                browser.wait(until.visibilityOf(OnboardingVendorRequestOR.dropdownProductCategoryValueExempt), 9000, 'DropDown opens');
                OnboardingVendorRequestOR.dropdownProductCategoryValueExempt.isDisplayed().then((displayed) => {
                    expect(displayed).to.equal(true);
                    OnboardingVendorRequestOR.dropdownProductCategoryValueExempt.click();
                })
            })
        })
    }

    clickReasonForRequest() {
        OnboardingVendorRequestOR.reasonForRequest.click().then(() => {
            browser.wait(until.visibilityOf(OnboardingVendorRequestOR.requestBidNewProduct), 2000, 'DropDown values');
            OnboardingVendorRequestOR.requestBidNewProduct.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
                OnboardingVendorRequestOR.requestBidNewProduct.click();
            })
        })
    }

    getTextBiddingProcess() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.getTextBiddingProcess), 2000, 'Will a current or active vendor be included in the bidding process');
        OnboardingVendorRequestOR.getTextBiddingProcess.getText().then((text) => {
            OnboardingVendorRequestOR.getTextBiddingProcess.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    clickReasonForRequestExistingProduct() {
        OnboardingVendorRequestOR.reasonForRequest.click().then(() => {
            browser.wait(until.visibilityOf(OnboardingVendorRequestOR.requestBidExistingProduct), 2000, 'Drop Down values');
            OnboardingVendorRequestOR.requestBidExistingProduct.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
                OnboardingVendorRequestOR.requestBidExistingProduct.click().then(() => {
                    expect(displayed).to.equal(true);
                });
            })
        })
    }

    clickReasonForRequestNewProduct() {
        OnboardingVendorRequestOR.reasonForRequest.click().then(() => {
            browser.wait(until.visibilityOf(OnboardingVendorRequestOR.requestBidNewProduct), 2000, 'Drop Down values');
            OnboardingVendorRequestOR.requestBidNewProduct.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
                OnboardingVendorRequestOR.requestBidNewProduct.click();
            })
        })
    }

    getTextBiddingProcessNotDisplayed() {
        browser.wait(until.invisibilityOf(OnboardingVendorRequestOR.getTextBiddingProcess), 1000, "Text is not displayed");
    }

    clickProductCategoryNonExempt() {
        OnboardingVendorRequestOR.dropdownProductCategoryValueExempt.click().then(() => {
            browser.wait(until.visibilityOf(OnboardingVendorRequestOR.dropdownProductCategoryValueNonExempt), 4000, 'DropDown opens Non-Exempt Value');
            OnboardingVendorRequestOR.dropdownProductCategoryValueNonExempt.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
                OnboardingVendorRequestOR.dropdownProductCategoryValueNonExempt.click();
            })
        })
    }

    clickReasonForRequestExistingProductisSelected() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.requestBidExistingProduct), 2000, 'Drop Down values');
        OnboardingVendorRequestOR.requestBidExistingProduct.isSelected().then(() => {
            OnboardingVendorRequestOR.requestBidExistingProduct.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    clickRadioButtonBiddingProcessYesVerifyCurrentVendorNameDropDown() {
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestOR.clickRadioButtonYes), 3000, 'Select Yes Bidding Process');
        OnboardingVendorRequestOR.clickRadioButtonYes.click().then(() => {
            OnboardingVendorRequestOR.currentVendorNameDropdown.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterProductTypeValue(value: string) {
        OnboardingVendorRequestOR.enterProductType.sendKeys(value).then(() => {
            OnboardingVendorRequestOR.enterProductTypeSelectedValue(value).isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterCurrrentVendorName(value: string) {
        OnboardingVendorRequestOR.currentVendorNameDropdown.click().then(() => {
            OnboardingVendorRequestOR.enterCurrentVendorName(value).click().then(() => {
                OnboardingVendorRequestOR.enterCurrentVendorName(value).isDisplayed().then((displayed) => {
                    expect(displayed).to.equal(true);
                })
            })
        })
    }

    clickNextButton() {
        OnboardingVendorRequestOR.clickNextButton.click().then(() => {
            browser.wait(until.elementToBeClickable(OnboardingVendorRequestOR.verifyTextRequestVendorPage), 4000, 'Verify Text Is the current vendor included');
            OnboardingVendorRequestOR.verifyTextRequestVendorPage.isDisplayed().then(() => {
                OnboardingVendorRequestOR.verifyTextRequestVendorPageWithYesValueSelected.isDisplayed().then((displayed) => {
                    expect(displayed).to.equal(true);
                })
            })
        })
    }

    clickNextButtonExitingProduct() {
        OnboardingVendorRequestOR.clickNextButton.click().then(() => {
            browser.wait(until.visibilityOf(OnboardingVendorRequestOR.incumbentTextDisplayed), 4000, 'Verify Text for Incumbent Vendor');
            OnboardingVendorRequestOR.incumbentTextDisplayed.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    verifyCategoryTypeDisplayed(value: string) {
        OnboardingVendorRequestOR.verifyCategoryTextDisplayed.isDisplayed().then(() => {
            OnboardingVendorRequestOR.verifyCategoryTypeDisplayed.getText().then((text) => {
                expect(text).equal(value);
                OnboardingVendorRequestOR.verifySectionTitleDisplayed.isDisplayed().then((displayed) => {
                    expect(displayed).to.equal(true);
                })
            })
        })
    }

    verifyCategoryTypeDisplayedExempt(value: string) {
        OnboardingVendorRequestOR.verifyCategoryTextDisplayed.isDisplayed().then(() => {
            OnboardingVendorRequestOR.verifyCategoryTypeDisplayedExempt.getText().then((text) => {
                expect(text).equal(value);
                OnboardingVendorRequestOR.verifySectionTitleDisplayed.isDisplayed().then((displayed) => {
                    expect(displayed).to.equal(true);
                })
            })
        })
    }

    verifyVendorNameValue(value: string) {
        OnboardingVendorRequestOR.getVendorName.getAttribute('value').then((displayed) => {
            browser.wait(until.visibilityOf(OnboardingVendorRequestOR.getVendorName), 4000, 'Verify Vendor NAme displayed');
            expect(displayed).equal(value);
        })
    }

    verifyProductTypeValue(value: string) {
        OnboardingVendorRequestOR.getProductType.getAttribute('value').then((displayed) => {
            browser.wait(until.visibilityOf(OnboardingVendorRequestOR.getProductType), 4000, 'Verify Product Type displayed');
            expect(displayed).equal(value);
        })
    }

    verifyProductCategoryValue(value: string) {
        OnboardingVendorRequestOR.getProductCategory.getAttribute('value').then((displayed) => {
            browser.wait(until.visibilityOf(OnboardingVendorRequestOR.getProductType), 4000, 'Verify Product Category displayed');
            expect(displayed).equal(value);
        })
    }

    verifyAddVendorBtn() {
        OnboardingVendorRequestOR.verifyAddVendorButton.click().then(() => {
            browser.wait(until.elementToBeClickable(OnboardingVendorRequestOR.verifyAddVendorButton), 4000, 'Verify Add Vendor Button is clickable');
            OnboardingVendorRequestOR.getVendorName.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(false);
            })
        })
    }

    validateSubmitVendorRequestBtn() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.submitVendorRequest), 1000, 'Submit Vendor Request');
        OnboardingVendorRequestOR.submitVendorRequest.isEnabled().then(function (enabled) {
            expect(enabled).to.equal(true);
        })
    }

    validateProductInformation() {
        OnboardingVendorRequestOR.getProductNameField.isPresent().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestOR.getFirstNameField.isPresent().then((displayed) => {
                expect(displayed).to.equal(true);
                OnboardingVendorRequestOR.getLastNameField.isPresent().then((displayed) => {
                    expect(displayed).to.equal(true);
                    OnboardingVendorRequestOR.getEmailFieldName.isPresent().then((displayed) => {
                        expect(displayed).to.equal(true);
                        OnboardingVendorRequestOR.getPhoneNumberFieldName.isPresent().then((displayed) => {
                            expect(displayed).to.equal(true);
                            OnboardingVendorRequestOR.getTypeFieldName.isPresent().then((displayed) => {
                                expect(displayed).to.equal(true);
                            })
                        })
                    })
                })
            })
        })
    }

    verifyPricingInformation() {
        OnboardingVendorRequestOR.getAnnualCostField.isPresent().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestOR.getAnnualVariableCostField.isPresent().then((displayed) => {
                expect(displayed).to.equal(true);
                OnboardingVendorRequestOR.getAnnualFixedCostField.isPresent().then((displayed) => {
                    expect(displayed).to.equal(true);
                    OnboardingVendorRequestOR.getTotalSpendField.isPresent().then((displayed) => {
                        expect(displayed).to.equal(true);
                        OnboardingVendorRequestOR.getOneTimeCostField.isPresent().then((displayed) => {
                            expect(displayed).to.equal(true);
                            OnboardingVendorRequestOR.getTermField.isPresent().then((displayed) => {
                                expect(displayed).to.equal(true);
                            })
                        })
                    })
                })
            })
        })
    }

    getCriticalQuestionsList(item: any) {
        OnboardingVendorRequestOR.getCriticalQuestions.isPresent().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestOR.getCriticalQuestions.getText().then((text) => {
                let questionCount = text[0].split("\n");
                for (var i = 0; i < questionCount.length; i++) {
                    expect(questionCount[i].trim()).to.equal(item[i]);
                }
            })
        })
    }

    getRiskAssessmentQuestionList(item: any) {
        OnboardingVendorRequestOR.getRiskAssessment.isPresent().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestOR.getRiskAssessment.getText().then((text) => {
                let questionCount = text[0].split("\n");
                for (var i = 0; i < questionCount.length; i++) {
                    expect(questionCount[i].trim()).to.equal(item[i]);
                }
            })
        })
    }
}