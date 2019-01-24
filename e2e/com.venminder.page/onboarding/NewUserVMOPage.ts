
import { browser, protractor } from "protractor";
import { NewUserVmoOR } from "../../com.venminder.page_object/onboarding/NewUserVmoOR";
import { siteUrls, userData } from "../../com.venminder.testdata/TestData";
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
const until = protractor.ExpectedConditions;
const expect = chai.expect;

export class NewRoleVMO {
  siteUrls: siteUrls = new siteUrls();
  userData: userData = new userData();

  clickLoginUser() {
    browser.wait(until.elementToBeClickable(NewUserVmoOR.loggedInUserBtn), 50000, "user click on login button");
    NewUserVmoOR.loggedInUserBtn.click();
  }

  clickAdminPanel() {
    browser.wait(until.elementToBeClickable(NewUserVmoOR.adminPanelBtn), 20000, "user click on admin panel");
    NewUserVmoOR.adminPanelBtn.click();
  }

  clickAddUser() {
    browser.sleep(70000);
    browser.wait(until.elementToBeClickable(NewUserVmoOR.addUsertab), 50000, "user click on add user");
    NewUserVmoOR.addUsertab.click();
  }

  VMORoleDisplayed() {
    browser.wait(until.visibilityOf(NewUserVmoOR.roleListVMO), 50000, "VMO role is displayed");
    NewUserVmoOR.roleListVMO.isDisplayed().then((isDisplayed) => {
      expect(isDisplayed).to.equal(true);
    });
  }

  selectVMOrole() {
    NewUserVmoOR.VMOCheckBox.click();
  }

  closeNewUserForm() {
    NewUserVmoOR.newUserFormCancelBtn.click();
  }

  clickUserActionBtn() {
    browser.wait(until.elementToBeClickable(NewUserVmoOR.userActionBtn), 50000, "user click on action button");
    NewUserVmoOR.userActionBtn.click();
  }

  clickEditBtn() {
    browser.wait(until.elementToBeClickable(NewUserVmoOR.userActionEditBtn), 20000, "user click on edit button");
    NewUserVmoOR.userActionEditBtn.click();
  }

  checkAdminCheckBox() {
    NewUserVmoOR.adminCheckbox.click();
  }

  userRolesCheckBoxSelected() {
    NewUserVmoOR.checkboxUserRoles.each((checkBox) => {
      checkBox.isSelected().then((selected) => {
        expect(selected).to.equal(true);
      });
    });
  }
}
