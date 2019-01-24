import { element, by } from 'protractor';

export class OnboardingVendorRequestOR {

  static getApprovalList = element(by.id("selected-approver-text"));
  static getExemptList = element.all(by.id("exempted-categories-text"));
  static clickNewRequestTile = element(by.id("vo-request_create-btn"));
  static bannerTitle = element(by.xpath("//*[text()='Vendor Request']"));
  static dropdownProductCategory = element(by.xpath("//*[text()='Select Category']"));
  static getDropdownValues = element.all(by.xpath("//ul[@role='listbox']"));
  static dropdownProductCategoryValueExempt = element(by.xpath("//span[text()='Accounting']"));
  static dropdownProductCategoryValueNonExempt = element(by.xpath("//span[text()='Accessories']"));
  static reasonForRequest = element(by.id("reasonRequestSelector"));
  static requestBidNewProduct = element(by.id("request-info-reason_0"));
  static requestBidExistingProduct = element(by.id("request-info-reason_1"));
  static getTextBiddingProcess = element(by.xpath("//div[@class='m-t-md newproductservice scenario']/label"));
  static clickRadioButtonYes = element(by.xpath("//div/label[@for = 'reason-yes']"));
  static currentVendorNameHeader = element(by.xpath("//label[text()='Current Vendor Name']"));
  static currentVendorNameDropdown = element(by.xpath("//span[text()='Vendor Name']"));
  static enterProductType = element(by.xpath("//*[@id='product_type']/div/input"));
  static enterProductTypeSelectedValue = function (value) {
    return element(by.xpath("//*[@id='product_type']/div/div/div/a/span[text()='" + value + "']"))
  };
  static enterCurrentVendorName = function (value) {
    return element(by.xpath("//span[text()='" + value + "']"))
  };
  static clickNextButton = element(by.xpath("//button[@type='submit']"));
  static verifyTextRequestVendorPage = element(by.xpath("//div/p[text()='Is the current vendor included?']"));
  static incumbentTextDisplayed = element(by.xpath("//div/p[text()='Is the incumbent vendor included?']"));
  static verifyTextRequestVendorPageWithYesValueSelected = element(by.xpath("//div/p[text()='Yes']"));
  static verifyCategoryTextDisplayed = element(by.xpath("//*[@class='strong' and text() ='Category']"));
  static verifyCategoryTypeDisplayed = element(by.xpath("//*[text() ='Accessories']"));
  static verifyCategoryTypeDisplayedExempt = element(by.xpath("//*[text() ='Accounting']"));
  static verifySectionTitleDisplayed = element(by.xpath("//*[text() ='Requesting bids for new product/service']"));
  static getVendorName = element(by.id("vo-vendorName"));
  static getProductType = element(by.id("inputProductType"));
  static getProductCategory = element(by.id("inputProductcategory"));
  static verifyAddVendorButton = element(by.xpath("//*[text() =' Add Vendor']"));
  static submitVendorRequest = element(by.id("submitRequest"));
  static getProductNameField = element(by.xpath("//*[@id='inputProductName']"));
  static getFirstNameField = element(by.id("inputFirstName"));
  static getLastNameField = element(by.id("inputLastName"));
  static getEmailFieldName = element(by.xpath("//*[@type='text' and @value.bind='standardQuestionAnswer.Email & validateOnChange']"));
  static getPhoneNumberFieldName = element(by.xpath("//*[@type='tel' and @value.bind='standardQuestionAnswer.AreaCode & validateOnChange']"));
  static getTypeFieldName = element(by.xpath("//*[@value.bind='standardQuestionAnswer.Type']"));
  static getAnnualCostField = element(by.xpath("//*[@value.bind='standardQuestionAnswer.AnnualCost & validateOnChange']"));
  static getAnnualVariableCostField = element(by.xpath("//*[@value.bind='standardQuestionAnswer.AnnualvariableCost & validateOnChange']"));
  static getAnnualFixedCostField = element(by.xpath("//*[@value.bind='standardQuestionAnswer.AnnualFixedCost & validateOnChange']"));
  static getTotalSpendField = element(by.xpath("//*[@value.bind='standardQuestionAnswer.TotalSpend & validateOnChange']"));
  static getOneTimeCostField = element(by.xpath("//*[@value.bind='standardQuestionAnswer.OnetimeCost & validateOnChange']"));
  static getTermField = element(by.xpath("//*[@value.bind='standardQuestionAnswer.Term & validateOnChange']"));
  static getCriticalQuestions = element.all(by.id("vo-critical-info-section"));
  static getRiskAssessment = element.all(by.id("vo-risk-info-section"));
  static clickCancelButton = element.all(by.id("cancelRequest"));
  static enterSiteURL = element(by.id("siteURL"));
  static enterAddress = element(by.id("inputAddress"));
  static enterAddress2 = element(by.id("inputAddress2"));
  static enterType = element(by.xpath("//*[text() ='Work']"));
  static enterDescription = element(by.xpath("//*[@id='vo-product-info-section']/form/div[3]/div/textarea"));
  static checkQuestions = element.all(by.xpath("//*[@value.bind='question.answer']"));
  static allQuestions = element.all(by.cssContainingText('option', 'Yes'));
  static enterExt = element(by.xpath("//*[@value.bind='standardQuestionAnswer.Ext & validateOnChange']"));
  static enterZipCode2 = element(by.xpath("//*[@value.bind='standardQuestionAnswer.ZipCode2 & validate']"));
  static enterAreaCode = element(by.xpath("//*[@value.bind='standardQuestionAnswer.AreaCode & validateOnChange']"));
  static enterPrefixCode = element(by.xpath("//*[@value.bind='standardQuestionAnswer.Prefix & validateOnChange']"));
  static enterSuffixCode = element(by.xpath("//*[@value.bind='standardQuestionAnswer.Suffix & validateOnChange']"));
  static successDialogBox = element(by.id("request-submit-success-dialog__label"));
  static clickGreatBtn = element(by.id("request-submit-success-dialog__great-link"));
  static selectAssignManager = element(by.xpath("//*[@id='assign-prod-mgr__dropdown-item-5' and text()='Testy  Tester']"));
  static requestRecievedAssignManagerSubmitBtn = element(by.id("assign-prod-mgr-dialog__submit-btn"));
  static missingInformation = element(by.xpath("//div[text() = 'Missing Information']"));
  static actionBtn = element(by.xpath("//div/button[contains(text(),'Actions')]"));
  static assignBtn = element(by.xpath("//*[@id='assignID' and contains(text(),'Assign')]"));
  static viewBtn = element(by.xpath("//*[@click.trigger='viewRequest()']/a"));
  static selectUser = element(by.xpath("//*[@value.bind='manager.userId' and contains(text(),'VMOUser vmo')]"));
  static selectUserDropDown = element(by.xpath("//select[@value.bind='VMOId']"));
  static submitBtn = element(by.id("vmo-selection__submit-btn"));
  static paginationView = element(by.xpath("//span[@click.delegate='changePageSize(size)' and contains(text(),'200')]"));
  static pendingVendorRequest = element(by.xpath("//*[@class='au-target' and contains(text(),'Pending')]"));
  static setMaximumPagination = function (value) {
    return element(by.xpath("//span[@click.delegate='changePageSize(size)' and contains(text(),'" + value + "')]"))
  };
  static closeBtn = element(by.xpath("//*[@id='dialog__cancel-btn']"));
  static verifyVendorName = element(by.xpath("//li[ contains(text(),'ABLSoft Inc')]"));
  static verifyAssignedVMOManager = element(by.xpath("//*[ @class= 'au-target' and contains(text(),'VMOUser vmo')]"));
} 