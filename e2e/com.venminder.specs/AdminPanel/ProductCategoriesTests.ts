import { UserRolesPage } from "./../../com.venminder.page/AdminPanel/UserRolesPage";
import { BasePageOR } from "../../com.venminder.page_object/shared/BasePageOR";
import { BasePage } from "../../com.venminder.page/shared/BasePage";
import { AdminPanelData } from "../../com.venminder.testdata/TestData";
import { VendorDashboardPage } from '../../com.venminder.page/dashboard/VendorDashboardPage';
import { ProductProfilePage } from '../../com.venminder.page/dashboard/ProductProfilePage';
import { ProductCategoryByProductPage } from '../../com.venminder.page/AdminPanel/ProductCategoryByProductPage';
import { ProductCategoriesByCategoryPage } from '../../com.venminder.page/AdminPanel/ProductCategoriesByCategoryPage';
import { browser } from "protractor";

describe("ORBCR - Functional Testing of Admin Panel Product Categories Tab", () => {
  let productCategoriesPage = new ProductCategoriesByCategoryPage();
  let userrolespage = new UserRolesPage();
  let basepage = new BasePage();
  let vendordashboard = new VendorDashboardPage();
  let productprofile = new ProductProfilePage();
  let productCategoryByProductPage = new ProductCategoryByProductPage();

  basepage.goToAdminPanelPage(BasePageOR.profileIcon_new, BasePageOR.adminPanelLink_new);
  userrolespage.clickOnProductCategoriesTab();

  describe("PBI-593 --> Admin Panel - Manage Categories: Add and Edit Category", () => {
  it("Admin Panel - Add and edit new category with exempt oversight requirement", () => {
    productCategoriesPage.verifyProductCategoryScreen();
    productCategoriesPage.verifyExemptCategoryTooltip();
    productCategoriesPage.clickOnAddNewCategory();
    productCategoriesPage.verifyAddCustomItemModal();
    let categoryName =
      AdminPanelData.categoryName + basepage.generateRandomText();
    productCategoriesPage.enterNewCategory(categoryName);
    productCategoriesPage.checkExemptOption();
    productCategoriesPage.clickOnSubmitNewCategory();
    productCategoriesPage.verifyCategoryAddedInExemptList(categoryName);
    productCategoriesPage.clickOnEditDeleteCategorytButton(categoryName,"Edit");
    productCategoriesPage.enterValueInEditCategory(categoryName);
    productCategoriesPage.clickOnSubmitNewCategory();
    productCategoriesPage.verifyCategoryAddedInNonExemptList(categoryName);
  });

  it("Admin Panel -Add, edit and sort category with max char allowed i.e. 150", () => {
    browser.refresh();
    userrolespage.clickOnProductCategoriesTab();
    productCategoriesPage.clickOnAddNewCategory();
    productCategoriesPage.verifyAddCustomItemModal();
    let categoryName =
      basepage.generateRandomText() + AdminPanelData.categoryNameMaxChar;
    productCategoriesPage.enterNewCategory(categoryName);
    productCategoriesPage.checkExemptOption();
    productCategoriesPage.clickOnSubmitNewCategory();
    productCategoriesPage.verifyCategoryAddedInExemptList(categoryName);
    productCategoriesPage.clickOnEditDeleteCategorytButton(categoryName,"Edit");
    productCategoriesPage.enterValueInEditCategory(categoryName);
    productCategoriesPage.clickOnSubmitNewCategory();
    productCategoriesPage.verifyCategoryAddedInNonExemptList(categoryName);
  });


  it("Admin Panel - Add new category with potential matches found", () => {
    browser.refresh();
    userrolespage.clickOnProductCategoriesTab();
    productCategoryByProductPage.clickOnByCategoryTab();
    productCategoriesPage.clickOnAddNewCategory();
    productCategoriesPage.verifyAddCustomItemModal();
    productCategoriesPage.enterNewCategory(AdminPanelData.potentialMatchData);
    productCategoriesPage.clickOnSubmitNewCategory();
    productCategoriesPage.verifyPotentialMatchModal();
  });

  it("Admin Panel - -Add and edit new category with already existing category", () => {
    browser.refresh();
    userrolespage.clickOnProductCategoriesTab();
    productCategoriesPage.clickOnAddNewCategory();
    productCategoriesPage.verifyAddCustomItemModal();
    let categoryName =
      basepage.generateRandomText() + AdminPanelData.categoryNameMaxChar;
    productCategoriesPage.enterNewCategory(categoryName);
    productCategoriesPage.checkExemptOption();
    productCategoriesPage.clickOnSubmitNewCategory();
    productCategoriesPage.clickOnAddNewCategory();
    productCategoriesPage.enterNewCategory(categoryName);
    productCategoriesPage.clickOnSubmitNewCategory();
    productCategoriesPage.verifyErrorMessage();
  });
  });

  describe("PBI-593 --> Admin Panel - By Product - Sort Category", () => {
    it("Admin Panel - By product - sort by product name", () => {
      userrolespage.clickOnProductCategoriesTab();
      productCategoryByProductPage.clickOnByCategoryTab();
      productCategoryByProductPage.clickOnByProductTab();
      productCategoryByProductPage.verifyProductNameSort();
    });
  
    it("Admin Panel - By product -sort by category name", () => {
      userrolespage.clickOnProductCategoriesTab();
      productCategoryByProductPage.clickOnByCategoryTab();
      productCategoryByProductPage.clickOnByProductTab();
      productCategoryByProductPage.verifyCategorySort();
    });
  
    it("Admin Panel - By product -sort by exempt category ", () => {
      userrolespage.clickOnProductCategoriesTab();
      productCategoryByProductPage.clickOnByCategoryTab();
      productCategoryByProductPage.clickOnByProductTab();
      productCategoryByProductPage.verifyExemptSort();
    });
  
    it("Admin Panel - By product -sort by vendor name ", () => {
      userrolespage.clickOnProductCategoriesTab();
      productCategoryByProductPage.clickOnByCategoryTab();
      productCategoryByProductPage.clickOnByProductTab();
      productCategoryByProductPage.verifyVendorNameSort();
    });
  });
    
  describe("PBI-9882 --> Admin Panel - Manage Categories: By Product - filter nnd search Category", () => {
  it("Admin Panel - By product filter by category", () => {
    productCategoryByProductPage.clickOnByProductTab();
    productCategoryByProductPage.verifyCategoryFilter(AdminPanelData.potentialMatchData);
    let searchCategory = basepage.generateRandomText();
    productCategoryByProductPage.verifyCategoryFilter(searchCategory);
    //productCategoryByProductPage.verifyNoResultErrorMessage(searchCategory);
  });

  it("Admin Panel - By product -search by vendor name ", () => {
    productCategoryByProductPage.clickOnByCategoryTab();
    productCategoryByProductPage.clickOnByProductTab();
    productCategoryByProductPage.verifyCategoryVendorProductSearch(AdminPanelData.searchVendor);
  });

  it("Admin Panel - By product -search by product name ", () => {
    productCategoryByProductPage.clickOnByCategoryTab();
    productCategoryByProductPage.clickOnByProductTab();
    productCategoryByProductPage.verifyCategoryVendorProductSearch(AdminPanelData.searchProduct);
  });

  it("Admin Panel - By product -search by category name ", () => {
    productCategoryByProductPage.clickOnByCategoryTab();
    productCategoryByProductPage.clickOnByProductTab();
    productCategoryByProductPage.verifyCategoryVendorProductSearch(AdminPanelData.potentialMatchData);
  });
});

  describe("PBI-596 --> Admin Panel - Manage Categories: Delete Category", () => {
    it("Verify the Deleting category, If category is not associated with non active products", () => {
      userrolespage.clickOnProductCategoriesTab();
      productCategoriesPage.clickOnAddNewCategory();
      let categoryName = AdminPanelData.categoryName + basepage.generateRandomText();
      productCategoriesPage.addNewCategory(categoryName, "EXEMPT");
      productCategoriesPage.clickOnSubmitNewCategory();
      productCategoriesPage.clickOnEditDeleteCategorytButton(categoryName, "DELETE");
      productCategoriesPage.verfiyDeleteCategoryModal(categoryName, false);
      productCategoriesPage.clickOnConfirmDeleteCategory(false);
      productCategoriesPage.verifyAddedDeletedItemOnAdminPanelCategoryTab(categoryName, "DELETE");
    });

    it("Verify the Deleting category, If category is associated from Product Profile tab", () => {
      basepage.searchVendorAndGoToDashboardPage(BasePageOR.inputVendorSearch_new, BasePageOR.vendorNameSearchList_new);
      vendordashboard.clickOnProductProfileTab();
      productprofile.clickOnEditProductInformationIcon();
      productprofile.selectProductManager();
      productprofile.selectCategoryByIndexText("Add a new category");
      let categoryName = AdminPanelData.categoryName + basepage.generateRandomText();
      productCategoriesPage.addNewCategory(categoryName, "EXEMPT");
      productCategoriesPage.clickOnSubmitNewCategory();
      productprofile.clickSaveButton();
      basepage.goToAdminPanelPage(BasePageOR.profileIcon_new, BasePageOR.adminPanelLink_new);
      userrolespage.clickOnProductCategoriesTab();
      productCategoriesPage.clickOnEditDeleteCategorytButton(categoryName, "DELETE");
      productCategoriesPage.verfiyDeleteCategoryModal(categoryName, true);
      productCategoriesPage.clickOnEditDeleteCategorytButton(categoryName, "DELETE");
      productCategoriesPage.clickOnConfirmDeleteCategory(true);
      productCategoriesPage.verifyAddedDeletedItemOnAdminPanelCategoryTab(categoryName, "DELETE");
    });
  });

 describe("PBI-597 --> Admin Panel - Assign/Reassign Categories: By Product", () => {
   it("Admin Panel - Assign/Reassign current category", () => {
    userrolespage.clickOnProductCategoriesTab();
    productCategoryByProductPage.clickOnByProductTab();
    productCategoryByProductPage.VerifyAssignCategory();
    productCategoryByProductPage.VerifyCancelAssignCategory();
    productCategoryByProductPage.VerifyReassignCategory();
    productCategoryByProductPage.VerifyCancelReassignCategory();
      
   });
  
   describe("PBI-9882 --> Admin Panel - Pagination and display of product categories", () => {
    it("Admin Panel - Pagination Scenarios",()=>{
      userrolespage.clickOnProductCategoriesTab();
      productCategoryByProductPage.clickOnByProductTab();
      productCategoryByProductPage.VerifyPaginationCount25();
      productCategoryByProductPage.VerifyPaginationCount50();
      productCategoryByProductPage.VerifyPaginationCount100();
      productCategoryByProductPage.VerifyPaginationCount200();
    });
   });
  });

 });

