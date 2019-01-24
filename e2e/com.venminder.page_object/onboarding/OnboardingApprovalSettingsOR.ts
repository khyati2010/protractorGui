import { element, by } from "protractor";
import { LoginPageOR } from "../shared/LoginPageOR";

export class OnboardingApprovalSettings extends LoginPageOR {
  newVendorApprovalSettingsTitle = element(
    by.xpath("//*[contains(text(),'New Vendor Approval Settings')]")
  );
  approverDropdownTitle = element(
    by.xpath("//*[contains(text(),'Who can approve')]")
  );
  approversDropdown = element(by.id("dropdown-approver-dropdown__btn"));
  approversDropdownSearchInput = element(
    by.id("dropdown-approver-dropdown__search-input")
  );
  exemptCategoriesDropdown = element(
    by.id("dropdown-prod-category-dropdown__btn")
  );
  exemptCategoriesDropdownSearchInput = element(
    by.id("dropdown-prod-category-dropdown__search-input")
  );
  approverApplySettingsBtn = element(by.id("approver-setting__btn-apply"));
  applySettingCancelBtn = element(by.id("approver-setting__btn-cancel"));
  selectedApproverList = element(by.id("selected-approver-text"));
  exemptCategoriesList = element(by.id("exempted-categories-text"));
  vendorOnboardingToggle = element(by.id("vendor-onboarding__btn-on-off"));
  approversDropdownContainer = element.all(
    by.xpath("//ul[@id='approver-dropdown-list-container']/li/a")
  );
  approverListItem = element(by.id("approver-dropdown-list-item-0"));
  approverApplySettings = element(by.id("approver-setting__btn-apply"));
  timeStampOnApplySettings = element(by.id("apply-settings_saved-msg"));
}
