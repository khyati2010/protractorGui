import { UserRolesPage } from "./UserRolesPage";
import { TextBox } from "../../com.venminder.utilities/TextBox";
import { Click } from "../../com.venminder.utilities/Click";
import { SelectDropDown } from "../../com.venminder.utilities/SelectDropDown";
import { AdminPanelData } from "../../com.venminder.testdata/TestData";
import { BasePage } from "../shared/BasePage";
import { protractor, browser } from "protractor";
import { ProductCategoriesOR } from "../../com.venminder.page_object/AdminPanel/ProductCategoriesOR";
import { ProductCategoriesByCategoryPage } from "./ProductCategoriesByCategoryPage";

const until = protractor.ExpectedConditions;

export class ProductCategoryByProductPage extends BasePage {
  textbox = new TextBox();
  click = new Click();
  select = new SelectDropDown();

  clickOnByProductTab() {
    ProductCategoriesOR.lblByProductTab.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
      ProductCategoriesOR.dropDownfilter.isDisplayed().then(isDisplayed => {
        this.assertEquals(isDisplayed, false);
        this.click.buttonClick(ProductCategoriesOR.lblByProductTab);
        console.log(
          ProductCategoryByProductPage.name + ": By Product Tab is clicked."
        );
      });
    });
  }

  clickOnByCategoryTab() {
    ProductCategoriesOR.lblByCategoryTab.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
      ProductCategoriesOR.btnAddCategory.isDisplayed().then(isDisplayed => {
        this.assertEquals(isDisplayed, false);
        this.click.buttonClick(ProductCategoriesOR.lblByCategoryTab);
        console.log(
          ProductCategoryByProductPage.name + ": By Category Tab is clicked."
        );
      });
    });
  }

  verifyCategoryFilter(category: string) {
    ProductCategoriesOR.lblProductCategoryOnScreen
      .isDisplayed()
      .then(isDisplayed => {
        this.assertEquals(isDisplayed, true);
      });
    ProductCategoriesOR.dropDownfilter.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
      this.click.buttonClick(ProductCategoriesOR.dropDownfilter);
      ProductCategoriesOR.txtSearchCategory.isDisplayed().then(isDisplayed => {
        this.assertEquals(isDisplayed, true);
        this.textbox.setTextValue(
          ProductCategoriesOR.txtSearchCategory,
          category
        );
      });
      ProductCategoriesOR.btnSelectAll.isDisplayed().then(isDisplayed => {
        this.assertEquals(isDisplayed, true);
      });
      ProductCategoriesOR.btnDeSelectAll.isDisplayed().then(isDisplayed => {
        this.assertEquals(isDisplayed, true);
      });

      ProductCategoriesOR.listCategory.each(element => {
        let index = 0;
        ProductCategoriesOR.listCategory.count().then(check => {
          if (check > 0) {
            ProductCategoriesOR.listCategory.then(category => {
              this.click.buttonClick(category[index]);
            });
            //    ProductCategoriesOR.btnCheck.isDisplayed().then(isDisplayed =>{
            //     this.assertEquals(isDisplayed, true);
            // });
          }
          //console.log("Selected category is : " + element.getText().toString());
        });
      });
    });
    this.click.buttonClick(ProductCategoriesOR.dropDownfilter);
  }

  verifyNoResultErrorMessage(searchCategory: string) {
    ProductCategoriesOR.errNoResult.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
      ProductCategoriesOR.errNoResult.getText().then(text => {
        let errMesage = text.toString().trim();
        console.log(
          ProductCategoryByProductPage.name +
            ": No result message is displayed " +
            errMesage
        );
        this.assertEquals(
          errMesage,
          AdminPanelData.noResultMessage + searchCategory
        );
      });
      this.click.buttonClick(ProductCategoriesOR.dropDownfilter);
    });
  }

  verifyCategorySort() {
    ProductCategoriesOR.lblCurrentCategory.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
      this.click.buttonClick(ProductCategoriesOR.lblCurrentCategory);
      browser.sleep(2000);
    });
  }

  verifyProductNameSort() {
    ProductCategoriesOR.lblProductName.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
      this.click.buttonClick(ProductCategoriesOR.lblProductName);
      browser.sleep(2000);
    });
  }

  verifyVendorNameSort() {
    console.log(ProductCategoriesByCategoryPage.name);
    ProductCategoriesOR.lblVendorName.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
      this.click.buttonClick(ProductCategoriesOR.lblVendorName);
      browser.sleep(2000);
    });
  }

  verifyExemptSort() {
    console.log(ProductCategoriesByCategoryPage.name);
    ProductCategoriesOR.lblExempt.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
      this.click.buttonClick(ProductCategoriesOR.lblExempt);
      browser.sleep(2000);
    });
  }

  verifyCategoryVendorProductSearch(name: string) {
    ProductCategoriesOR.inputSearch.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
      this.click.buttonClick(ProductCategoriesOR.inputSearch);
      this.textbox.setTextValue(ProductCategoriesOR.inputSearch, name);
      console.log(
        ProductCategoryByProductPage.name +
          ": Searched category name is : " +
          name
      );
    });
  }
  //Assign/Reassign -

  VerifyAssignCategory() {
    let VendorName;
    let CategorySelected;
    this.click.buttonClick(ProductCategoriesOR.selectCategories);
    this.textbox.setTextValue(
      ProductCategoriesOR.SelectCategorySearch,
      "No Category"
    );
    this.click.buttonClick(ProductCategoriesOR.NoCategoryAssignedOption);
    this.click.buttonClick(ProductCategoriesOR.AdminPanelHeader);

    ProductCategoriesOR.NoResult.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
    });
    ProductCategoriesOR.VendorSelected.getText().then(text => {
      VendorName = text.toString().trim();
      console.log("Vendor Name:- " + VendorName);
      this.click.buttonClick(ProductCategoriesOR.AddCategory);
      this.click.buttonClick(ProductCategoriesOR.SelectCategory);
      ProductCategoriesOR.SelectDropDownOption.getText().then(text => {
        CategorySelected = text.toString().trim();
        console.log("Category Name:- " + CategorySelected);
        this.click.buttonClick(ProductCategoriesOR.SelectDropDownOption);
        this.click.buttonClick(ProductCategoriesOR.AssignCategoryButton);
        console.log("Category Assigned");
        browser.sleep(3000);
        this.click.buttonClick(ProductCategoriesOR.NoCatgryAssigned);
        this.click.buttonClick(ProductCategoriesOR.DeselectAllOption);
        this.click.buttonClick(ProductCategoriesOR.AdminPanelHeader);
        browser.sleep(2000);
        this.click.buttonClick(ProductCategoriesOR.SearchOption);
        this.textbox.setTextValue(ProductCategoriesOR.SearchOption, VendorName);
      });
      browser.sleep(2000);
      ProductCategoriesOR.verfyCategry.isDisplayed().then(isDisplayed => {
        ProductCategoriesOR.verfyCategry.getText().then(text => {
          this.assertEquals(text.toString().trim(), CategorySelected);
        });
      });
    });
  }

  verifyAddedDeletedItemOnAdminPanelCategoryTab(
    categoryName: string,
    actions: string
  ) {
    if (actions === "ADD" || actions === "EDIT") {
      ProductCategoriesOR.categoryList.each(element => {
        element.getText().then(text => {
          let data = text.toString().trim();
          if (data === categoryName) {
            this.assertEquals(data, categoryName);
            console.log(
              ProductCategoryByProductPage.name +
                ": Category is added as an exempt/Non-exempt from Product Category Tab"
            );
          }
        });
      });
    }
    if (actions === "DELETE") {
      ProductCategoriesOR.categoryList.each(element => {
        element.getText().then(text => {
          let data = text.toString().trim();
          expect(data).not.toEqual(categoryName);
        });
      });
    }
  }
  VerifyCancelAssignCategory() {
    browser.sleep(2000);
    this.click.buttonClick(ProductCategoriesOR.selectCategories);
    this.textbox.setTextValue(
      ProductCategoriesOR.SelectCategorySearch,
      "No Category"
    );
    this.click.buttonClick(ProductCategoriesOR.NoCategoryAssignedOption);
    this.click.buttonClick(ProductCategoriesOR.AdminPanelHeader);
    ProductCategoriesOR.NoResult.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
      this.click.buttonClick(ProductCategoriesOR.AddCategory);
    });
    this.click.buttonClick(ProductCategoriesOR.SelectCategory);
    this.click.buttonClick(ProductCategoriesOR.SelectDropDownOption);
    this.click.buttonClick(ProductCategoriesOR.CancelButton);
  }

  VerifyReassignCategory() {
    browser.sleep(2000);
    let ProductName;
    let CategoryReassigned;
    this.click.buttonClick(ProductCategoriesOR.NoCatgryAssigned);
    this.click.buttonClick(ProductCategoriesOR.DeselectAllOption);
    this.click.buttonClick(ProductCategoriesOR.AdminPanelHeader);
    // browser.sleep(2000);
    //this.click.buttonClick(ProductCategoriesOR.prdctcategry);
    // browser.sleep(9000);
    //this.click.buttonClick(ProductCategoriesOR.byprdcttab);
    //browser.sleep(8000);
    this.click.buttonClick(ProductCategoriesOR.chkbox);

    ProductCategoriesOR.prdctNameSelected.getText().then(text => {
      ProductName = text.toString().trim();

      this.click.buttonClick(ProductCategoriesOR.ReassignButton);

      ProductCategoriesOR.ReassignModal.isDisplayed().then(isDisplayed => {
        this.assertEquals(isDisplayed, true);
      });
      this.click.buttonClick(ProductCategoriesOR.SelectCategory);
      this.click.buttonClick(ProductCategoriesOR.ReassignOptions);

      ProductCategoriesOR.SelectDropDownOption.getText().then(text => {
        CategoryReassigned = text.toString().trim();

        this.click.buttonClick(ProductCategoriesOR.ReassignConfirmButton);

        this.textbox.setTextValue(
          ProductCategoriesOR.SearchOption,
          ProductName
        );
      });
      browser.sleep(2000);
      ProductCategoriesOR.verfyCategry.isDisplayed().then(isDisplayed => {
        this.assertEquals(
          ProductCategoriesOR.verfyCategry.getText(),
          CategoryReassigned
        );
      });
    });
  }

  VerifyCancelReassignCategory() {
    browser.sleep(2000);
    this.click.buttonClick(ProductCategoriesOR.chkbox);

    this.click.buttonClick(ProductCategoriesOR.ReassignButton);

    ProductCategoriesOR.ReassignModal.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
    });
    this.click.buttonClick(ProductCategoriesOR.SelectCategory);
    this.click.buttonClick(ProductCategoriesOR.ReassignOptions);
    this.click.buttonClick(ProductCategoriesOR.CancelButton);
  }

  //Pagination -

  VerifyPaginationCount25() {
    let PageCount1;
    let TwfyCount;
    browser.sleep(2000);
    //  this.click.buttonClick(ProductCategoriesOR.prdctcategry);
    //  this.click.buttonClick(ProductCategoriesOR.byprdcttab);
    ProductCategoriesOR.PageCount.getText().then(text => {
      PageCount1 = text.toString().trim();
      console.log("page count :" + PageCount1);
      browser.sleep(2000);
      ProductCategoriesOR.CountRow.count().then(count => {
        TwfyCount = text.toString().trim();
        console.log("No of Rows :" + TwfyCount);
        ProductCategoriesOR.PageCount.isDisplayed().then(isDisplayed => {
          this.assertEquals(TwfyCount, PageCount1);
        });
      });
    });
  }

  VerifyPaginationCount50() {
    let PageCount2;
    let FiftyCount;
    browser.sleep(2000);
    //  this.click.buttonClick(ProductCategoriesOR.prdctcategry);
    //  this.click.buttonClick(ProductCategoriesOR.byprdcttab);
    this.click.buttonClick(ProductCategoriesOR.page50);
    ProductCategoriesOR.PageCount.getText().then(text => {
      PageCount2 = text.toString().trim();
      console.log("page count :" + PageCount2);
      browser.sleep(2000);
      ProductCategoriesOR.CountRow.count().then(count => {
        FiftyCount = text.toString().trim();
        console.log("No of Rows :" + FiftyCount);
        ProductCategoriesOR.PageCount.isDisplayed().then(isDisplayed => {
          this.assertEquals(FiftyCount, PageCount2);
        });
      });
    });
  }

  VerifyPaginationCount100() {
    let PageCount3;
    let HundredCount;
    browser.sleep(2000);
    //  this.click.buttonClick(ProductCategoriesOR.prdctcategry);
    //  this.click.buttonClick(ProductCategoriesOR.byprdcttab);
    this.click.buttonClick(ProductCategoriesOR.page100);
    ProductCategoriesOR.PageCount.getText().then(text => {
      PageCount3 = text.toString().trim();
      console.log("page count :" + PageCount3);
      browser.sleep(2000);
      ProductCategoriesOR.CountRow.count().then(count => {
        HundredCount = text.toString().trim();
        console.log("No of Rows :" + HundredCount);
        ProductCategoriesOR.PageCount.isDisplayed().then(isDisplayed => {
          this.assertEquals(HundredCount, PageCount3);
        });
      });
    });
  }

  VerifyPaginationCount200() {
    let PageCount4;
    let TwoHundredCount;
    this.click.buttonClick(ProductCategoriesOR.page200);
    ProductCategoriesOR.PageCount.getText().then(text => {
      PageCount4 = text.toString().trim();
      console.log("page count :" + PageCount4);
      browser.sleep(2000);
      ProductCategoriesOR.CountRow.count().then(count => {
        TwoHundredCount = text.toString().trim();
        console.log("No Of Rows :" + TwoHundredCount);
        ProductCategoriesOR.PageCount.isDisplayed().then(isDisplayed => {
          this.assertEquals(TwoHundredCount, PageCount4);
        });
      });
    });
  }
}
