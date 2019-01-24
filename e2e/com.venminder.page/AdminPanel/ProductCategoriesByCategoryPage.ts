import { UserRolesPage } from "./UserRolesPage";
import { TextBox } from "../../com.venminder.utilities/TextBox";
import { Click } from "../../com.venminder.utilities/Click";
import { SelectDropDown } from "../../com.venminder.utilities/SelectDropDown";
import { AdminPanelData } from "../../com.venminder.testdata/TestData";
import { BasePage } from "../shared/BasePage";
import { protractor, browser } from "protractor";
import { ProductCategoriesOR } from "../../com.venminder.page_object/AdminPanel/ProductCategoriesOR";
import { OversightRequirementsOR } from "../../com.venminder.page_object/AdminPanel/OversightRequirementsOR";
OversightRequirementsOR
const until = protractor.ExpectedConditions;

export class ProductCategoriesByCategoryPage extends BasePage {
  textbox = new TextBox();
  click = new Click();
  select = new SelectDropDown();
  selectedCategory: string;

  verifyProductCategoryScreen() {
    console.log(ProductCategoriesByCategoryPage.name);
    ProductCategoriesOR.lblProductCategoryOnScreen
      .isDisplayed()
      .then(isDisplayed => {
        this.assertEquals(isDisplayed, true);
      });
    console.log("Product Category tab is visible");
    ProductCategoriesOR.lblByCategoryTab.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
    });
    console.log("By Category tab is visible");
    ProductCategoriesOR.lblByProductTab.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
    });
    console.log("By Product tab is visible");
  }

  verifyAddCustomItemModal() {
    console.log(ProductCategoriesByCategoryPage.name);
    browser.wait(until.visibilityOf(ProductCategoriesOR.lblAddCategory), 10000);
    console.log("Add custom modal is displayed.");
    ProductCategoriesOR.inputAddCategoryName.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
    });
    ProductCategoriesOR.characterCountText.getText().then(text => {
      this.assertEquals(
        text.toString().trim(),
        AdminPanelData.label_addCategoryCharCount
      );
    });
    ProductCategoriesOR.btnSubmitNewCategory.isEnabled().then(isEnabled => {
      this.assertEquals(isEnabled, true);
    });
    ProductCategoriesOR.btnCancelAddNewCategory
      .isDisplayed()
      .then(isDisplayed => {
        this.assertEquals(isDisplayed, true);
      });
  }

  //Delete Category
  addNewCategory(categoryName: string, actions: string) {
    this.textbox.setTextValue(ProductCategoriesOR.inputAddCategoryName, categoryName);
    console.log("Entered Custom new category : " + categoryName);
    ProductCategoriesOR.inputExemptBox.isSelected().then(isSelected => {
      if (actions === "EXEMPT") {
        if (!isSelected) {
          this.click.buttonClick(ProductCategoriesOR.lblExemptOversight);
          console.log("Exempt from oversight requirements is clicked");
        }
      }
      if (actions === "NON-EXEMPT") {
        if (isSelected) {
          this.click.buttonClick(ProductCategoriesOR.lblExemptOversight);
          console.log("Non-Exempt from oversight requirements is clicked");
        }
      }
    });
  }

  verfiyDeleteCategoryModal(categoryName: string, isCategoryAssociated: boolean) {
    console.log(ProductCategoriesByCategoryPage.name);
    browser.wait(until.visibilityOf(ProductCategoriesOR.headerDeleteCategoryItem), 30000, "Delete modal is not displayed");
    ProductCategoriesOR.headerDeleteCategoryItem.getText().then(text => {
      this.assertEquals(text.toString().trim(), AdminPanelData.headerDeleteCategoryModal);
    });
    ProductCategoriesOR.categoryName.getText().then(text => {
      this.assertEquals(text.toString().trim(), categoryName);
    });
    ProductCategoriesOR.btnConfirm.getText().then(text => {
      this.assertEquals(text.toString().trim(), AdminPanelData.btnConfirm);
    });
    ProductCategoriesOR.btnCancel.getText().then(text => {
      this.assertEquals(text.toString().trim(), AdminPanelData.btnCancel);
    });
    if (isCategoryAssociated) {
      this.click.buttonClick(ProductCategoriesOR.btnConfirm);
      browser.wait(until.visibilityOf(ProductCategoriesOR.selectNewCategory), 30000);
      ProductCategoriesOR.productCount.isPresent().then(isPresent => {
        this.assertEquals(isPresent, true);
      });
      ProductCategoriesOR.oldCategoryName.getText().then(text => {
        this.assertEquals(text.toString().trim(), categoryName);
      });
      ProductCategoriesOR.btnDeleteReassign.isEnabled().then(isEnable => {
        this.assertEquals(isEnable, false);
      });
      ProductCategoriesOR.btnDeleteReassign.getText().then(text => {
        this.assertEquals(text.toString().trim(), "Delete & Reassign");
      });
      this.clickOnCancelDeleteCategory(isCategoryAssociated);
    }
  }

  clickOnConfirmDeleteCategory(isCategoryAssociated: boolean) {
    ProductCategoriesOR.btnConfirm.isEnabled().then(isEnabled => {
      if (isEnabled) {
        this.click.buttonClick(ProductCategoriesOR.btnConfirm);
        if (isCategoryAssociated) {
          browser.wait(until.visibilityOf(ProductCategoriesOR.selectNewCategory), 30000);
          this.click.buttonClick(ProductCategoriesOR.selectNewCategory);
          browser.wait(until.visibilityOf(ProductCategoriesOR.newCategorySearchBox), 30000);
          ProductCategoriesOR.newCategoryList.then(options => {
            let randomNumber = Math.floor(Math.random() * options.length);
            console.log("Random Category Number: " + randomNumber);
            this.click.buttonClick(options[randomNumber]);
            ProductCategoriesOR.selectNewCategory.getText().then(text => {
              console.log("Random Selected Category Name: " + text.toString().trim());
              this.selectedCategory = text.toString().trim();
            })
          });
          this.click.buttonClick(ProductCategoriesOR.btnDeleteReassign);
        }
        browser.wait(until.visibilityOf(ProductCategoriesOR.lblProductCategories), 20000);
      }
    });
  }

  clickOnCancelDeleteCategory(isCategoryAssociated: boolean) {
    if (!isCategoryAssociated) {
      ProductCategoriesOR.btnCancel.isEnabled().then(isEnabled => {
        if (isEnabled)
          this.click.buttonClick(ProductCategoriesOR.btnCancel);
      });
    }
    if (isCategoryAssociated) {
      ProductCategoriesOR.btnCancelDeleteReassign.isEnabled().then(isEnabled => {
        if (isEnabled)
          this.click.buttonClick(ProductCategoriesOR.btnCancelDeleteReassign);
      });
    }
    browser.wait(until.visibilityOf(ProductCategoriesOR.lblProductCategories), 20000);
  }


  verifyAddedDeletedItemOnAdminPanelCategoryTab(categoryName: string, actions: string) {
    console.log(ProductCategoriesByCategoryPage.name);
    if (actions === "ADD" || actions === "EDIT") {
      ProductCategoriesOR.categoryList.each((element) => {
        element.getText().then(text => {
          let data = text.toString().trim();
          if (data === categoryName) {
            this.assertEquals(data, categoryName);
            console.log("Category is added as an exempt/Non-exempt from Product Category Tab");
          }
        });
      });
    }
    if (actions === "DELETE") {
      ProductCategoriesOR.categoryList.each((element) => {
        element.getText().then(text => {
          let data = text.toString().trim();
          expect(data).not.toEqual(categoryName);
        });
      });
    }

  }

   enterNewCategory(addNewCategory: string) {
    this.textbox.setTextValue(
      ProductCategoriesOR.inputAddCategoryName, addNewCategory);
    console.log("Entered Custom new category : " + addNewCategory);
  }

   clickOnAddNewCategory() {
    ProductCategoriesOR.lblByCategoryTab.isDisplayed().then(isDisplayed =>{
    this.assertEquals(isDisplayed, true);
    ProductCategoriesOR.btnAddCategory.isDisplayed().then(isDisplayed =>{
      this.assertEquals(isDisplayed, true);
    this.scrollpage.scrollToElement(ProductCategoriesOR.btnAddCategory);
    this.click.buttonClick(ProductCategoriesOR.btnAddCategory);
    console.log("Add new category button is clicked.");
    });
  });
 }

  checkExemptOption() {
    browser.wait(until.visibilityOf(ProductCategoriesOR.checkBoxExempt), 10000);
    ProductCategoriesOR.checkBoxExempt.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);{ 
        this.click.buttonClick(ProductCategoriesOR.checkBoxExempt);
      }
    console.log("Exempt from oversight requirements is clicked.");
    });
    browser.sleep(1000);
  }

  clickOnCancelAddNewCategory() {
    browser.wait(
      until.visibilityOf(ProductCategoriesOR.btnCancelAddNewCategory),
      1000
    );
    this.click.buttonClick(ProductCategoriesOR.btnCancelAddNewCategory);
    console.log("Cancel button is clicked.");
  }

   clickOnSubmitNewCategory() {
    browser.wait(
      until.visibilityOf(ProductCategoriesOR.btnSubmitNewCategory),
      20000);
    this.click.buttonClick(ProductCategoriesOR.btnSubmitNewCategory);
    console.log("Sumbmit button is clicked.");
    browser.sleep(10000);
  }

  verifyCategoryAddedInExemptList(categoryName: string) {
    console.log(ProductCategoriesByCategoryPage.name);
    let i = 0;
    ProductCategoriesOR.categoryList.each((element, i) => {
      element.getText().then(text => {
        let data = text.toString().trim();
        if (data === categoryName) {
          this.assertEquals(data, categoryName);
          i++;
        }
      });
    });
    console.log("Category is added as an exempt from oversight requirements.");
  }

  verifyCategoryAddedInNonExemptList(categoryName: string) {
    console.log(ProductCategoriesByCategoryPage.name);
    let i = 0;
    ProductCategoriesOR.categoryList.each((element, i) => {
      element.getText().then(text => {
        let data = text.toString().trim();
        if (data === categoryName) {
          this.assertEquals(data, categoryName);
          i++;
        }
      });
    });
    console.log("Category is added as a non exempt from oversight requirements.");
  }

 async  editExemptCategory(categoryName: string) {
    let i = 0;
    ProductCategoriesOR.categoryList.each((element, i) => {
      element.getText().then(text => {
        let data = text.toString().trim();
        if (data === categoryName) {
          ProductCategoriesOR.btnActions.then(actionButton=>{
            this.click.buttonClick(actionButton[i]);
            browser.sleep(1000);
            console.log("Clicked on actions new category for : " + categoryName);
            ProductCategoriesOR.btnActionsEdit.then(edit=>{
              this.click.buttonClick(edit[i]);
              console.log("Clicked on edit new category for : " + categoryName);
            })
          });
          this.assertEquals(data, categoryName);
          i++;
        }
      });
    });
   await this.textbox.setTextValue(
      ProductCategoriesOR.inputAddCategoryName,
      categoryName+ this.generateRandomText());
    console.log("Renamed custom new category to: " + categoryName);
  }

  clickOnEditDeleteCategorytButton(categoryName: string, actions: string) {
    ProductCategoriesOR.categoryList.each((element, index) => {
      element.getText().then(text => {
        let data = text.toString().trim();
        if (data === categoryName) {
          ProductCategoriesOR.btnActions.then(action => {
            this.click.buttonClick(action[index]);
            console.log("Clicked on actions for : " + categoryName);
            browser.sleep(1000);
            if (actions === "Edit") {
              ProductCategoriesOR.btnActionsEdit.then(edit => {
                this.click.buttonClick(edit[index]);
                console.log("Clicked on edit category for : " + categoryName);
              });
            } else if (actions === "Delete") {
              ProductCategoriesOR.btnActionsDelete.then(deletes => {
                this.click.buttonClick(deletes[index]);
                console.log("Clicked on  delete category for : " + categoryName);
              });
            }
          });
        }
      });
    });
    browser.sleep(2000);
    if (actions === "Edit")
      browser.wait(until.visibilityOf(ProductCategoriesOR.headerEditCategory), 3000, "Edit Oversight Requirement modal is not displayed");
    else if (actions === "Delete")
      browser.wait(until.visibilityOf(ProductCategoriesOR.headerDeleteCategory), 3000, "Confirm Delete modal is not displayed");
  }


  enterValueInEditCategory(categoryName: string) {
  this.textbox.setTextValue(
      ProductCategoriesOR.inputAddCategoryName,
      categoryName+ this.generateRandomText());
    console.log("Renamed custom new category : " + categoryName);
  }

  verifyErrorMessage(){
    ProductCategoriesOR.errDuplicateCategory.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
    });
    console.log(ProductCategoriesByCategoryPage.name + " :Duplicate error message is displayed");
    ProductCategoriesOR.btnCancelAddNewCategory.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
      this.click.buttonClick(ProductCategoriesOR.btnCancelAddNewCategory);
    });
}

verifyExemptCategoryTooltip(){
  ProductCategoriesOR.lblInfoToolTipExempt.isDisplayed().then(isDisplayed => {
    this.assertEquals(isDisplayed, true);{ 
      this.click.buttonClick(ProductCategoriesOR.lblInfoToolTipExempt);
      ProductCategoriesOR.lblInfoToolTipExempt.getText().then(text => {
          let data = text.toString().trim();
          if (data === AdminPanelData.exemptCategoryToolip) {
            this.assertEquals(data, AdminPanelData.exemptCategoryToolip);
          }
        });
      }
    });
}

verifyNonExemptCategoryTooltip(){
  ProductCategoriesOR.lblInfoToolTipNonExempt.isDisplayed().then(isDisplayed => {
    this.assertEquals(isDisplayed, true);{ 
      this.click.buttonClick(ProductCategoriesOR.lblInfoToolTipNonExempt);
      ProductCategoriesOR.lblInfoToolTipNonExempt.getText().then(text => {
          let data = text.toString().trim();
          if (data === AdminPanelData.nonExemptCategoryToolip) {
            this.assertEquals(data, AdminPanelData.nonExemptCategoryToolip);
          }
        });
      }
    });
}

verifyExemptCategorySort(){
  ProductCategoriesOR.lblSortExempt.isDisplayed().then(isDisplayed => {
    this.assertEquals(isDisplayed, true);{ 
      this.click.buttonClick(ProductCategoriesOR.lblSortExempt);
      }
    });
}

verifyNonExemptCategorySort(){
  ProductCategoriesOR.lblSortNonExempt.isDisplayed().then(isDisplayed => {
    this.assertEquals(isDisplayed, true);{ 
      this.click.buttonClick(ProductCategoriesOR.lblSortNonExempt);
      }
    });
    this.click.buttonClick(ProductCategoriesOR.lblSortNonExempt);
}

verifyPotentialMatchModal() {
  ProductCategoriesOR.lblPotentialMatchMessage.isDisplayed().then(isDisplayed => {
    this.assertEquals(isDisplayed, true);
    ProductCategoriesOR.lblPotentialMatchMessage.getText().then(text => {
      let data = text.toString().trim();
      if (data === AdminPanelData.potentialMatchMessage) {
        this.assertEquals(data, AdminPanelData.potentialMatchMessage);
      }
    });
  });
}


}
