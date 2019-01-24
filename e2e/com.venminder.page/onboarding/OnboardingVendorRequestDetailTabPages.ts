import { OnboardingVendorRequestViewOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestDetailTabOR";
import { by, element, ElementArrayFinder, browser, protractor } from "protractor";
import { OnboardingVendorRequestOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestOR";
import { OnboardingVendorRequestViewTileOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestViewTileOR";

const chai = require("chai").use(require("chai-as-promised"));
const until = protractor.ExpectedConditions;
const expect = chai.expect;

const assert = chai.assert;



export class vendorRequestView {

    navigateToRequestView() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.actionBtn), 9000, 'Action Btn');
        OnboardingVendorRequestOR.actionBtn.click().then(() => {
            browser.wait(until.visibilityOf(OnboardingVendorRequestOR.viewBtn), 9000, 'View Btn');
            OnboardingVendorRequestOR.viewBtn.click().then(() => {
                OnboardingVendorRequestViewOR.statusTab.isDisplayed().then((Displayed) => {
                    expect(Displayed).to.equal(true);
                })
            });
        });
    }

    clickDetailsTab() {
        OnboardingVendorRequestViewOR.detailsTab.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewOR.detailsTab.click();
        })
    }

    verifyFormSections() {
        OnboardingVendorRequestViewOR.vendorInfo.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewOR.productInfo.isDisplayed().then((Displayed) => {
                expect(Displayed).to.equal(true);
                OnboardingVendorRequestViewOR.pricingInfo.isDisplayed().then((Displayed) => {
                    expect(Displayed).to.equal(true);
                    OnboardingVendorRequestViewOR.criticalInfo.isDisplayed().then((Displayed) => {
                        expect(Displayed).to.equal(true);
                        OnboardingVendorRequestViewOR.riskAssessment.isDisplayed().then((Displayed) => {
                            expect(Displayed).to.equal(true);
                        })
                    })
                })
            })
        })
    }

    clickEditBtn() {
        OnboardingVendorRequestViewOR.editBtn.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewOR.editBtn.click();
        })
    }

    clickCancelBtn() {
        OnboardingVendorRequestViewOR.cancelBtn.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewOR.cancelBtn.click();
        })
    }

    verifyButtonVisible() {
        OnboardingVendorRequestViewOR.saveBtn.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewOR.cancelBtn.isDisplayed().then((Displayed) => {
                expect(Displayed).to.equal(true);
            })
        })
    }

    enterTextDescField(value: any) {
        OnboardingVendorRequestViewOR.descField.clear().then(() => {
            OnboardingVendorRequestViewOR.descField.sendKeys(value).then(() => {
                OnboardingVendorRequestViewOR.saveBtn.click().then(() => {
                    OnboardingVendorRequestViewOR.descField.getAttribute('value').then((Displayed) => {
                        expect(Displayed).to.equal(value);
                    })
                })
            })
        })
    }

    clickStatusSortBtn() {
        OnboardingVendorRequestViewOR.statusSortBtn.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewOR.statusSortBtn.click();
        })
    }

    clickDateSortBtn() {
        OnboardingVendorRequestViewOR.dateSortBtn.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewOR.dateSortBtn.click();
        })
    }

    clickEditBtnFalse() {
        OnboardingVendorRequestViewOR.editBtn.isPresent().then((Displayed) => {
            console.log("Value is :" + Displayed)
            expect(Displayed).to.equal(false);
        })
    }

    verifyEditBtnDisabled() {
        OnboardingVendorRequestViewOR.editBtn.isEnabled().then((Displayed) => {
            console.log("Value is :" + Displayed)
            expect(Displayed).to.equal(true);
        })
    }

    clickAllVendorRequestsListAndNavToViewTilePage() {
        OnboardingVendorRequestViewOR.clickAllVendorRequest.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewOR.clickAllVendorRequest.click().then(() => {
                OnboardingVendorRequestViewOR.menuNav.click().then(() => {
                    OnboardingVendorRequestViewTileOR.searchRequest.isDisplayed().then((Displayed) => {
                        expect(Displayed).to.equal(true);
                    })
                })
            })
        })
    }

    verifyVMOManager() {
        OnboardingVendorRequestViewOR.vmoManager.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
        })
    }

    verifyTooltipDisplayed() {
        OnboardingVendorRequestViewOR.clickAllVendorRequest.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewOR.clickAllVendorRequest.click().then(() => {
                OnboardingVendorRequestViewOR.allPendingVendorList.getAttribute('title').then((displayedValue) => {
                    assert(displayedValue != null)
                })
            })
        })
    }

    NavToViewTilePage() {
        OnboardingVendorRequestViewOR.menuNav.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewOR.menuNav.click();
        })
    }
}
