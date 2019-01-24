import { OnboardingVendorRequestViewTileOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestViewTileOR";
import { browser, protractor } from "protractor";
import { OnboardingVendorRequestOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestOR";
import { LoginPage } from "../shared/LoginPage";

const chai = require("chai").use(require("chai-as-promised"));
const until = protractor.ExpectedConditions;
const expect = chai.expect;
var dd, mm, yyyy;
export class vendorRequestViewTile extends LoginPage {

    enterSiteURL() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.enterSiteURL), 2000, 'Enter Site URL field');
        OnboardingVendorRequestOR.enterSiteURL.sendKeys(this.generateRandomText()).then(() => {
            OnboardingVendorRequestOR.enterSiteURL.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterAddress() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.enterAddress), 2000, 'Enter Address field');
        OnboardingVendorRequestOR.enterAddress.sendKeys(this.generateRandomText()).then(() => {
            OnboardingVendorRequestOR.enterAddress.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterAddress2() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.enterAddress2), 2000, 'Enter Address2 field');
        OnboardingVendorRequestOR.enterAddress2.sendKeys(this.generateRandomText()).then(() => {
            OnboardingVendorRequestOR.enterAddress2.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterZipCode2() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.enterZipCode2), 2000, 'Enter ZipCode2 field');
        OnboardingVendorRequestOR.enterZipCode2.sendKeys(this.getRandomInteger()).then(() => {
            OnboardingVendorRequestOR.enterZipCode2.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterProductName() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.getProductNameField), 2000, 'Enter Product Name');
        OnboardingVendorRequestOR.getProductNameField.sendKeys(this.generateRandomText()).then(() => {
            OnboardingVendorRequestOR.getProductNameField.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterFirstName() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.getFirstNameField), 2000, 'Enter First Name');
        OnboardingVendorRequestOR.getFirstNameField.sendKeys(this.generateRandomText()).then(() => {
            OnboardingVendorRequestOR.getFirstNameField.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterLastName() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.getLastNameField), 2000, 'Enter Last Name');
        OnboardingVendorRequestOR.getLastNameField.sendKeys(this.generateRandomText()).then(() => {
            OnboardingVendorRequestOR.getLastNameField.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterEmailAddress() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.getEmailFieldName), 2000, 'Enter Email Address');
        OnboardingVendorRequestOR.getEmailFieldName.sendKeys(this.generateRandomText() + "@test.com").then(() => {
            OnboardingVendorRequestOR.getEmailFieldName.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterAreaCode() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.enterAreaCode), 2000, 'Enter Area Code');
        OnboardingVendorRequestOR.enterAreaCode.sendKeys(this.getRandomInteger()).then(() => {
            OnboardingVendorRequestOR.enterAreaCode.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterPrefixCode() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.enterPrefixCode), 2000, 'Enter Prefix Code');
        OnboardingVendorRequestOR.enterPrefixCode.sendKeys(this.getRandomInteger()).then(() => {
            OnboardingVendorRequestOR.enterPrefixCode.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterSuffixCode() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.enterSuffixCode), 2000, 'Enter Suffix Code');
        OnboardingVendorRequestOR.enterSuffixCode.sendKeys(this.getRandomInteger()).then(() => {
            OnboardingVendorRequestOR.enterSuffixCode.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterExtField() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.enterExt), 2000, 'Enter EXT field Value');
        OnboardingVendorRequestOR.enterExt.sendKeys(this.getRandomInteger()).then(() => {
            OnboardingVendorRequestOR.enterExt.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    selectType() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.enterType), 2000, 'Select Type');
        OnboardingVendorRequestOR.enterType.click().then(() => {
            OnboardingVendorRequestOR.enterType.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterDescription() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.enterDescription), 2000, 'Enter Description');
        OnboardingVendorRequestOR.enterDescription.sendKeys(this.generateRandomText()).then(() => {
            OnboardingVendorRequestOR.enterDescription.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterAnnualCost() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.getAnnualCostField), 2000, 'Enter Annual Cost');
        OnboardingVendorRequestOR.getAnnualCostField.sendKeys(this.getRandomInteger()).then(() => {
            OnboardingVendorRequestOR.getAnnualCostField.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterAnnualVariableCost() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.getAnnualVariableCostField), 2000, 'Enter Annual Variable Cost');
        OnboardingVendorRequestOR.getAnnualVariableCostField.sendKeys(this.getRandomInteger()).then(() => {
            OnboardingVendorRequestOR.getAnnualVariableCostField.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterAnnualFixedCost() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.getAnnualFixedCostField), 2000, 'Enter Annual Fixed  Cost');
        OnboardingVendorRequestOR.getAnnualFixedCostField.sendKeys(this.getRandomInteger()).then(() => {
            OnboardingVendorRequestOR.getAnnualFixedCostField.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterTotalSpend() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.getTotalSpendField), 2000, 'Enter Total Spend');
        OnboardingVendorRequestOR.getTotalSpendField.sendKeys(this.getRandomInteger()).then(() => {
            OnboardingVendorRequestOR.getTotalSpendField.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterOneTimeCost() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.getOneTimeCostField), 2000, 'Enter One Time Cost');
        OnboardingVendorRequestOR.getOneTimeCostField.sendKeys(this.getRandomInteger()).then(() => {
            OnboardingVendorRequestOR.getOneTimeCostField.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterTerm() {
        OnboardingVendorRequestOR.getTermField.sendKeys(this.generateRandomText()).then(() => {
            OnboardingVendorRequestOR.getTermField.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    allQuestions() {
        OnboardingVendorRequestOR.allQuestions.count().then((count) => {
            OnboardingVendorRequestOR.allQuestions.isEnabled().then(() => {
                for (var i = 0; i < count; i++) {
                    OnboardingVendorRequestOR.allQuestions.get(i).click();
                }
                browser.sleep(3000)
            })
        })
    }

    submitForm() {
        OnboardingVendorRequestOR.submitVendorRequest.isEnabled().then((displayed) => {
            OnboardingVendorRequestOR.submitVendorRequest.click();
        })

    }

    successBoxValidation(Message: any) {
        OnboardingVendorRequestOR.successDialogBox.isDisplayed().then(() => {
            OnboardingVendorRequestOR.successDialogBox.getText().then((displayed) => {
                expect(displayed).to.equal(Message);
            })
        })
    }

    clickGreatBtn() {
        OnboardingVendorRequestOR.clickGreatBtn.isDisplayed().then(() => {
            OnboardingVendorRequestOR.clickGreatBtn.click().then(() => {
                browser.wait(until.visibilityOf(OnboardingVendorRequestOR.bannerTitle), 9000, 'Vendor-Onboarding Banner');
                OnboardingVendorRequestOR.bannerTitle.isDisplayed().then((Displayed) => {
                    expect(Displayed).to.equal(true);
                })
            })
        })
    }

    clickViewTile() {
        OnboardingVendorRequestViewTileOR.clickViewTile.isDisplayed().then(() => {
            OnboardingVendorRequestViewTileOR.clickViewTile.click().then(() => {
                OnboardingVendorRequestViewTileOR.searchRequest.isDisplayed().then((Displayed) => {
                    expect(Displayed).to.equal(true);
                })
            })
        })
    }

    enterSerachRequestAsperVendorSelected(vendor: string) {
        browser.sleep(2000)
        OnboardingVendorRequestViewTileOR.searchRequest.sendKeys(vendor).then(() => {
            browser.actions().sendKeys(protractor.Key.ENTER).perform().then(() => {
                browser.sleep(3000)
                OnboardingVendorRequestViewTileOR.downloadCurrentView.isPresent().then((Displayed) => {
                    expect(Displayed).to.equal(true);
                })
            });
        })
    }

    getGridValues(value: any) {
        OnboardingVendorRequestViewTileOR.viewGrid.getText().then((text) => {
            let values = text[0].split("\n", 2);
            expect(values[1].includes(value)).to.equal(true);
        })
    }

    selectAssignManager() {
        OnboardingVendorRequestOR.selectAssignManager.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestOR.selectAssignManager.click().then(() => {
                OnboardingVendorRequestOR.requestRecievedAssignManagerSubmitBtn.click().then(() => {
                })
            });
        })
    }

    validateMissingInformation() {
        OnboardingVendorRequestOR.missingInformation.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
        })
    }

    assignUser() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.actionBtn), 9000, 'Action Btn');
        OnboardingVendorRequestOR.actionBtn.click().then(() => {
            browser.wait(until.visibilityOf(OnboardingVendorRequestOR.assignBtn), 9000, 'Assign Btn');
            OnboardingVendorRequestOR.assignBtn.click().then(() => {
                browser.wait(until.elementToBeClickable(OnboardingVendorRequestOR.selectUser), 90000, 'Select User');
                OnboardingVendorRequestOR.selectUser.click().then(() => {
                    browser.wait(until.elementToBeClickable(OnboardingVendorRequestOR.submitBtn), 110000, 'submit Btn');
                    OnboardingVendorRequestOR.submitBtn.click();
                    browser.sleep(20000);
                });
            });
        });
    }

    setPagination() {
        if (OnboardingVendorRequestOR.setMaximumPagination(200).isEnabled()) {
            OnboardingVendorRequestOR.setMaximumPagination(200).click();
        }
        else if (OnboardingVendorRequestOR.setMaximumPagination(100).isEnabled()) {
            OnboardingVendorRequestOR.setMaximumPagination(100).click();
        }
        else if (OnboardingVendorRequestOR.setMaximumPagination(50).isEnabled()) {
            OnboardingVendorRequestOR.setMaximumPagination(50).click();
        }
    }

    validateVMOManager() {
        OnboardingVendorRequestOR.verifyAssignedVMOManager.isPresent().then((Displayed) => {
            expect(Displayed).to.equal(true);
        })
    }

    searchPendingVendorRequest() {
        browser.sleep(4000)
        OnboardingVendorRequestOR.pendingVendorRequest.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestOR.pendingVendorRequest.click().then(() => {
                OnboardingVendorRequestOR.verifyVendorName.isDisplayed().then((Displayed) => {
                    expect(Displayed).to.equal(true);
                    OnboardingVendorRequestOR.closeBtn.click();
                });
            });
        });
    }

    filterContainerView() {
        OnboardingVendorRequestViewTileOR.vendorRequestFilterContainer.isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
        })
    }

    selectAssignmentInFilter() {
        OnboardingVendorRequestViewTileOR.filterAssignmentDropdownBtn.click().then(() => {
            OnboardingVendorRequestViewTileOR.filterAssignentsUser.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
            OnboardingVendorRequestViewTileOR.filterSelectAssignee.click().then(() => {
                OnboardingVendorRequestViewTileOR.applyFilterBtn.click();
            })
        })
    }

    selectStatus() {
        browser.wait(until.invisibilityOf(OnboardingVendorRequestViewTileOR.loaderOnAction), 30000, 'status option is not clickable')
        OnboardingVendorRequestViewTileOR.filterStatusDropdownBtn.click().then(() => {
            OnboardingVendorRequestViewTileOR.filterStatusDropdown.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
            OnboardingVendorRequestViewTileOR.filterStatusOption.click();
            OnboardingVendorRequestViewTileOR.applyFilterBtn.click();
        })
    }

    selectRequestDateRange() {
        browser.wait(until.invisibilityOf(OnboardingVendorRequestViewTileOR.loaderOnAction), 10000, 'status option is not clickable')
        OnboardingVendorRequestViewTileOR.filterStartDateTime.click();
        browser.wait(until.visibilityOf(OnboardingVendorRequestViewTileOR.datePickerContainer), 10000, "datepicker is displayed")
        OnboardingVendorRequestViewTileOR.filterCurrentDate.click();
        OnboardingVendorRequestViewTileOR.filterEndDateTime.click();
    }

    selectDeadlineDateRange() {
        OnboardingVendorRequestViewTileOR.deadlineStartDateTime.click();
        OnboardingVendorRequestViewTileOR.deadlineEndDateTime.click();
        OnboardingVendorRequestViewTileOR.applyFilterBtn.click();
    }
}
