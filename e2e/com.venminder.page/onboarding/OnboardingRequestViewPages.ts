import { OnboardingVendorRequestViewOR } from "../../com.venminder.page_object/onboarding/OnboardingRequestViewOR";
import { by, element, ElementArrayFinder, browser, protractor } from "protractor";
import { OnboardingVendorRequestOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestOR";

const chai = require("chai").use(require("chai-as-promised"));
const until = protractor.ExpectedConditions;
const expect = chai.expect;

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
}