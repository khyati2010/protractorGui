import * as NewUserVMOPage from "../../com.venminder.page/onboarding/NewUserVMOPage";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
import { siteUrls, userData } from "../../com.venminder.testdata/TestData";

describe("validating the functionality for add new role with VMO", () => {
  const addNewUserVMO = new NewUserVMOPage.NewRoleVMO();
  const siteUrl = new siteUrls();
  const credential = new userData();
  const login = new LoginPage();

  it("login with admin user", () => {
    login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
  });

  it("user navigate to admin panel", () => {
    addNewUserVMO.clickLoginUser();
    addNewUserVMO.clickAdminPanel();
  });

  it("user validate VMO is being displayed in role description for add new user", () => {
    addNewUserVMO.clickAddUser();
    addNewUserVMO.VMORoleDisplayed();
    addNewUserVMO.closeNewUserForm();
  });

  it("user validate VMO option for the existing user", () => {
    addNewUserVMO.clickUserActionBtn();
    addNewUserVMO.clickEditBtn();
  });

  it("user click on administrator checkbox", () => {
    addNewUserVMO.checkAdminCheckBox();
  });

  it("user validate all roles checkbox is being selected", () => {
    addNewUserVMO.userRolesCheckBoxSelected();
  });

});
