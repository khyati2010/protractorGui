import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
import { AddVendorPage } from "../../com.venminder.page/dashboard/AddVendorPage";
import { userData, siteUrls } from "../../com.venminder.utilities/TestData";

describe("Add Vendor Functionality", function() {
  let loginPage = new LoginPage();
  let addvendor = new AddVendorPage();
  let siteUrl = new siteUrls();

  loginPage.openUrl(siteUrl.sand_dev_1_url);
  loginPage.login();

  it("Adding a Vendor", function() {
    addvendor.createNewVendor();
  });
});
