import { browser, protractor } from "protractor";
import { OnboardingApprovalSettings } from "../../com.venminder.page_object/onboarding/OnboardingApprovalSettingsOR";
import { siteUrls, userData } from "../../com.venminder.testdata/TestData";
const chai = require("chai").use(require("chai-as-promised"));
const until = protractor.ExpectedConditions;
const expect = chai.expect;

export class ApprovalSettings {
    siteUrls: siteUrls = new siteUrls();
    userData: userData = new userData();

    approverSettingsContent() {
        browser.wait(until.visibilityOf(OnboardingApprovalSettings.newVendorApprovalSettingsTitle), 10000, "Approval settings content displayed");
        OnboardingApprovalSettings.exemptCategoriesDropdown.isDisplayed(), OnboardingApprovalSettings.approverDropdownTitle.isDisplayed(),
            OnboardingApprovalSettings.applySettingCancelBtn.isDisplayed(), OnboardingApprovalSettings.approverApplySettingsBtn.isDisplayed(),
            OnboardingApprovalSettings.approversDropdown.isDisplayed().then((Displayed) => {
                expect(Displayed).to.equal(true);
            });
    }

    clickApprovalSettingsCanclBtn() {
        OnboardingApprovalSettings.applySettingCancelBtn.click();
    }

    clickApproversDropdownBtn() {
        OnboardingApprovalSettings.approversDropdown.click();
    }

    selectMinApproverValidation() {
        OnboardingApprovalSettings.approverListContainer.getText().then((text) => {
            const usersNames = text[0].split("\n");
            const usersCount = usersNames.length;
            if (usersCount >= 2) {
                OnboardingApprovalSettings.approverListItem(0).click().then(() => {
                    OnboardingApprovalSettings.approverApplySettingsBtn.isEnabled().then((enabled) => {
                        expect(enabled).to.equal(false);
                    });
                });
            }
            OnboardingApprovalSettings.vendorOnboardingToggle.getAttribute("class").then((value) => {
                const className = value.toString();
                if (className.indexOf("active") !== -1) {
                    OnboardingApprovalSettings.vendorOnboardingToggle.click().then(() => {
                        OnboardingApprovalSettings.activateOnboardingConfirmChcBox.click();
                        OnboardingApprovalSettings.activateOnboardingSubmitBtn.click();
                        browser.wait(until.invisibilityOf(OnboardingApprovalSettings.loaderOnAction), 4000, "loader is still displayed");
                        OnboardingApprovalSettings.vendorOnboardingToggle.click().then(() => {
                            OnboardingApprovalSettings.minimumUserErrorMsg.isDisplayed().then((displayed) => {
                                expect(displayed).to.equal(true);
                            });
                        });
                    });
                } else {
                    OnboardingApprovalSettings.vendorOnboardingToggle.click().then(() => {
                        browser.sleep(1000);
                        OnboardingApprovalSettings.minimumUserErrorMsg.isDisplayed().then((displayed) => {
                            browser.sleep(1000);
                            expect(displayed).to.equal(true);
                        });
                    });
                }
            });
        });
    }

    vendorOnboardingtoggleOnOffClick() {
        browser.wait(until.invisibilityOf(OnboardingApprovalSettings.loaderOnAction), 4000, "laoder is displayed so element is not clickables");
        OnboardingApprovalSettings.vendorOnboardingToggle.click().then(() => {
            OnboardingApprovalSettings.activateOnboardingDialogModal.isDisplayed().then(() => {
                OnboardingApprovalSettings.activateOnboardingConfirmChcBox.click();
                OnboardingApprovalSettings.activateOnboardingSubmitBtn.click();
            });
        });
    }

    onboardingONValidation() {
        this.selectedApproversUncheck();
        OnboardingApprovalSettings.approverListItem(0).click();
        OnboardingApprovalSettings.approverListItem(1).click().then(() => {
            OnboardingApprovalSettings.approverApplySettingsBtn.isEnabled().then((enabled) => {
                expect(enabled).to.equal(true);
            });
        });
        this.vendorOnboardingtoggleOnOffClick();

    }

    selectedApproversUncheck() {
        OnboardingApprovalSettings.checkedApprover.count().then((size) => {
            OnboardingApprovalSettings.checkedApprover.getText().then((text) => {
                for (let i = 0; i < size; i++) {
                    OnboardingApprovalSettings.uncheckApprovers(text[i]).click();
                }
            });
        });
    }
}
