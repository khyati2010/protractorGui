import { by, element } from "protractor";

export class OnboardingApprovalSettings {
    static newVendorApprovalSettingsTitle = element(by.xpath("//*[contains(text(),'New Vendor Approval Settings')]"));
    static approverDropdownTitle = element(by.xpath("//*[contains(text(),'Who can approve')]"));
    static approversDropdown = element(by.id("dropdown-approver-dropdown__btn"));
    static approversDropdownSearchInput = element(by.id("dropdown-approver-dropdown__search-input"));
    static approverListContainer = element.all(by.id("approver-dropdown-list-container"));
    static exemptCategoriesDropdown = element(by.id("dropdown-prod-category-dropdown__btn"));
    static exemptCategoriesDropdownSearchInput = element(by.id("dropdown-prod-category-dropdown__search-input"));
    static approverApplySettingsBtn = element(by.id("approver-setting__btn-apply"));
    static applySettingCancelBtn = element(by.id("approver-setting__btn-cancel"));
    static selectedApproverList = element(by.id("selected-approver-text"));
    static exemptCategoriesList = element(by.id("exempted-categories-text"));
    static vendorOnboardingToggle = element(by.id("vendor-onboarding__btn-on-off"));
    static vendorOnboardingOff = element(by.className("btn btn-lg btn-toggle pull-right m-t-n-lg au-target"));
    static vendorOnboardingOn = element(by.className("btn btn-lg btn-toggle pull-right m-t-n-lg au-target active"));
    static activateOnboardingDialogModal = element(by.id("activate-vo-dialog__container"));
    static activateOnboardingConfirmChcBox = element(by.className("checkbox checkbox-primary checkbox-inline"));
    static activateOnboardingSubmitBtn = element(by.id("activate-vo-dialog__submit-btn"));
    static minimumUserErrorMsg = element(by.id("vo-on-off__error-msg"));
    static approversDropdownContainer = element.all(by.xpath("//ul[@id='approver-dropdown-list-container']/li/a"));
    static approverApplySettings = element(by.id("approver-setting__btn-apply"));
    static timeStampOnApplySettings = element(by.id("apply-settings_saved-msg"));
    static checkedApprover = element.all(by.xpath("//*[@id='approver-dropdown-list-container']/li[@class='au-target selected']"));
    static loaderOnAction = element(by.xpath("//img[@ref='imgElem']"));
    static approverListItem = (index) => element(by.id("approver-dropdown-list-item-" + index));
    static uncheckApprovers = (index) => element(by.xpath("//*[@class='text au-target'][contains(text(),'" + index + "')]"));

}
