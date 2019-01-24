import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
import { userData, siteUrls } from "../../com.venminder.utilities/TestData";
let loginPage = new LoginPage();
let siteUrl = new siteUrls();

describe("Search a Vendor and navigate to Vendor Dashboard page", function() {
  loginPage.openUrl(siteUrl.sand_dev_1_url);

  it("login with DCadmin credentials", function() {});
  //TODO: Add specs  for this case

  it("click on sales and contracting tab", function() {});
  //TODO: Add specs  for this case

  it("select existing client for onboarding software request", function() {});
  //TODO: Add specs  for this case
});
