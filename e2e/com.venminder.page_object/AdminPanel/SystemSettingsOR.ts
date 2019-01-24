import { element, by } from "protractor";

export class SystemSettingsOR {
 
static lblAdminPanel = element(by.xpath("//div[@id='settings']//h1[text()='Admin Panel']"));
static lblSettings = element(by.xpath("//h2[text()='Settings']"));

//Risk Approval Settings
static lblRiskApprovalSettings = element(by.xpath("//h4[text()='Risk Approval Settings']"));
static btnRiskApprovalSettings = element(by.xpath("//input[@id='switch02']"));
static radioBtn1RiskApproval = element(by.xpath("//label[@for='radio1RA']"));
static radioBtn2RiskApproval = element(by.xpath("//label[@for='radio2RA']"));
static btnRiskSaveSettings = element(by.xpath("//div[@id='AT_RiskApproval']//button[@id='AT_SaveButton']"));
static btnRiskCancelSettings = element(by.xpath("//div[@id='AT_RiskApproval']//button[@id='AT_CancelButton']"));
static lblNumberOfRiskApprovers = element(by.xpath("//span[@mouseover.delegate='showPopup()']"));
static riskApproverList = element.all(by.xpath("//div[@id='popover']//span"));

//Document Storage Permissions
static lblDocumentStorage = element(by.xpath("//h4[text()='Document Storage Permissions']"));
static dropDownDownload = element(by.xpath("//select[@value.bind='documentStoragePermissions.CanDownload']"));
static dropDownDownloadOptionsList = element.all(by.xpath("//select[@value.bind='documentStoragePermissions.CanDownload']/option"));
static btnDocumentSaveSettings = element(by.xpath("//div[@id='AT_DocumentStorage']//button[@id='AT_SaveButton']"));
static btnDocumentCancelSettings = element(by.xpath("//div[@id='AT_DocumentStorage']//button[@id='AT_CancelButton']"));
static dropDownEdit = element(by.xpath("//select[@value.bind='documentStoragePermissions.CanEdit']"));
static dropDownTags = element(by.xpath("//select[@value.bind='documentStoragePermissions.CanManageTags']"));
static dropDownEditOptionsList = element.all(by.xpath("//select[@value.bind='documentStoragePermissions.CanEdit']/option"));
static dropDownTagsOptionsList = element.all(by.xpath("//select[@value.bind='documentStoragePermissions.CanManageTags']/option"));

//Service Permissions
static lblServicePermissions = element(by.xpath("//h4[text()='Service Permissions']"));
static dropDownManageOrders = element(by.xpath("//select[@value.bind='servicePermissions.CanManageServiceOrders']"));
static dropDownManageOrdersList = element.all(by.xpath("//select[@value.bind='servicePermissions.CanManageServiceOrders']/option"));
static btnServiceSaveSettings = element(by.xpath("//div[@id='AT_ServicePermissions']//button[@id='AT_SaveButton']"));
static btnServiceCancelSettings = element(by.xpath("//div[@id='AT_ServicePermissions']//button[@id='AT_CancelButton']"));

}