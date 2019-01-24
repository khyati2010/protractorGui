
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
}

export class SlaData {

  autoCompelete = "am";
  categoryDetails = "coffe_machine";
  title = "SLA";
  notes = "Description should have max limit of 500 characters.";
  date = "11/07/2019";
  slaHomeTitle = "https://sand-dev-3-rsd.venminder.com/clients/sla/";
  successfullPerformanceRange = "When measurement is greater than 10";
  successfullPerformancePenalty = "100";
  improvementNeededRange = "When measurement is greater than 5";
  improvementNeededPenalty = "120";
  unAcceptablePerformanceRange = "No exceptions";
  unAcceptablePerformancePenalty = "No Penalty";
  validationText = ['You must select an SLA Manager',
    'You must select an SLA Monitor',
    'You must select an SLA Excalation point',
    'You must select a frequency',
    '',
    'You must select a response',
    'You must enter a range',
    'Cure period is required',
    'You must enter a range',
    'Cure period is required',
    'You must enter a range',
    'Cure period is required'];


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
  vendorInformationSection = [
    "Vendor Name",
    "Site URL",
    "Address",
    "Address2",
    "City",
    "State",
    "Select State",
    "...",
    "Zip",
    "Description",
    "Add field"
  ];
  productInformationSection = [
    "Product Name",
    "Product Type",
    "Select Type",
    "Product Category",
    "Select Category",
    "First Name",
    "Last Name",
    "Email",
    "Phone Number",
    "Ext.",
    "Type",
    "Select Type",
    "Work",
    "Home",
    "Cell",
    "Description",
    "Add field"
  ];
  pricingInformationSection = [
    "Annual Cost",
    "Annual variable cost",
    "Annual fixed cost",
    "Total Spend (contract lifetime)",
    "Onetime Cost (Setup Fees, etc.)",
    "Term (months/years)",
    "Add field"
  ];
  clientMasterForm = "Enterprise Client 1 Master Form";
}
