import { UserRolesPage } from "./../../com.venminder.page/AdminPanel/UserRolesPage";
import { BasePageOR } from "../../com.venminder.page_object/shared/BasePageOR";
import { BasePage } from "../../com.venminder.page/shared/BasePage";
import { AdminPanelData } from "../../com.venminder.testdata/TestData";
import { VendorDashboardPage } from '../../com.venminder.page/dashboard/VendorDashboardPage';
import { ProductProfilePage } from '../../com.venminder.page/dashboard/ProductProfilePage';
import { ProductCategoryByProductPage } from '../../com.venminder.page/AdminPanel/ProductCategoryByProductPage';
import { ProductCategoriesByCategoryPage } from '../../com.venminder.page/AdminPanel/ProductCategoriesByCategoryPage';

describe("ORBCR - Functional Testing of Admin Panel Product Categories Tab", () => {
  let productCategoriesPage = new ProductCategoriesByCategoryPage();
  let userrolespage = new UserRolesPage();
  let vendordashboard = new VendorDashboardPage();
  let productprofile = new ProductProfilePage();
  let basepage = new BasePage();
  let productCategoryByProductPage = new ProductCategoryByProductPage();

  basepage.goToAdminPanelPage(BasePageOR.profileIcon_new, BasePageOR.adminPanelLink_new);
  userrolespage.clickOnSystemSettingsTab();

  describe("PBI 7282- RISK APPROVAL SETTINGS ", () => {

    it("Admin Panel - System Settings : Convert from Page save to section saves ", () => {


    });
  

  });



  describe("PBI 7282- DOCUMENT STORAGE PERMISSIONS", () => {

    it("Admin Panel - System Settings : Convert from Page save to section saves ", () => {


    });
  

  });

  describe("PBI 7282- SERVICE PERMISSIONS", () => {

    it("Admin Panel - System Settings : Convert from Page save to section saves ", () => {


    });
  

  });


});