export class siteUrls {
  sand_dev_1_url = "https://sand-dev-1-rsd.venminder.com";
  sand_dev_2_url = "https://sand-dev-2-app.venminder.com";
  sand_dev_3_url = "https://sand-dev-3-rsd.venminder.com";
  sand_gets_1_url = "https://sand-gets-1-app.venminder.com";
}
export class userData {
  admin_username = "testy.tester@entclient1.com";
  dc_admin_username = "venminder.admin@venminder.com";
  general_username = "general@entclient1.com";
  username_onboarding = "testData1@entclient1.com";
  VMO_username = "non.admin@entclient1.com ";
  general_user_pswd = "Digital123!";
  password = "Digital123";
  URL_ADMIN_PANEL = "https://sand-dev-1-rsd.venminder.com/clients/admin-panel";
  static URL_HOME_PAGE =
    "https://sand-dev-1-app.venminder.com/FI/MainDashboard";
  vendor_name = "Adobe Systems Incorporated";
}

export class VendorProfileData {
  static vendor_keyword = "AL";
  static dashboardLabel = "Vendor Dashboard";
  static vendorName = "Vendor_";
  static productName = "Product_";
  static critical = "Critical";
  static non_critical = "Non-Critical";
  static thirdPartyIndex = 1;
  static fourthPartyIndex = 2;
  static productType = "ACH Services";
  static label_Vendor_Information = "Vendor Information";
}

export class productProfile {
  status_active = "Active";
  status_inactive = "Inactive";
  status_index = 1;
}

export class database {
  port = "1433";
  venminder_db_service = "sandbox-venminder.database.windows.net";
  venminder_vcms_db = "SAND-DEV-1-VCMS";
  venminder_email_db = "SAND-DEV-1-Email";
  venminder_logging_db = "SAND-DEV-1-Logging";
  venminder_db_user = "3Pillar";
  venminder_db_password = "p37*4W7VG78s";
}
export class masterFormSection {
  vendorInformationSection = ["Vendor Name", "Site URL", "Address", "Address2", "City", "State", "Select State", "Zip", "Description", "Add field"];
  productInformationSection = ["Product Name", "Product Type", "Select Type", "Product Category", "Select Category", "First Name", "Last Name", "Email", "Phone Number", "Ext.", "Type", "Select Type", "Work", "Home", "Cell", "Description", "Add field"];
  pricingInformationSection = ["Annual Cost", "Annual variable cost", "Annual fixed cost", "Total Spend (contract lifetime)", "Onetime Cost (Setup Fees, etc.)", "Term (months/years)", "Add field"];
  criticalQuestionsList = ["Would a sudden disappearance of this vendor (e.g., due to insolvency, due to sudden termination) cause a material disruption to the business?",
    "Would the time to recover be greater than 24 hours / 1 business day?",
    "Would the disappearance have an impact on your institution’s customers?"]
  clientMasterForm = "Enterprise Client 1 Master Form";
  customFieldLblNames = ["test"];
  formNames = ["test Clone Form", "test New Custom Form", "Edited Form Name"]

}

export class vendorRequestData {
  vendorRequest = ["Application", "ABLSoft Inc", "Accessories", "Accounting"];
  riskAssessmentList = ["Will this vendor have access to, store or transmit non-public consumer information (NPI)? (customer or employee)",
    "Will this vendor provide customer/borrower facing products or services?",
    "Will this  vendor host our information on their servers?",
    "Will this vendor have access to our network (remote or otherwise)?",
    "Will this vendor have direct access to our customers?  (call center, collection agency, etc)",
    "Will this vendor be selling a product/service or charging a fee directly to our  customers?",
    "Will this vendor be permitted to cross sell other products unrelated to our institution to the customer?",
    "Will this vendor be introducing a new (no prior experience with) product or service to our institution?",
    "Has this vendor been the subject of an enforcement action?"]
  desctest = ["Hi this is the Description text added."];
  message = ["Your Vendor request has been submitted."];

}
