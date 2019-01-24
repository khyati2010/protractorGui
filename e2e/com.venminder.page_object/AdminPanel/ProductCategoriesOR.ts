import { element, by } from "protractor";

export class ProductCategoriesOR {
  static lblProductCategories = element(by.xpath("//h2[text()='Product Categories']"));
  static lblAdminPanel = element(by.xpath("//h1[text()='Admin Panel']"));
  static btnInfo = element(by.xpath("//i[@click.delegate='showSimplifiedLandingModal()]"));
  static lblProductCategoryOnScreen = element(by.xpath("//h2[text()='Product Categories']"));
  static lblByCategoryTab = element(by.xpath("//li[@role='presentation'][1]"));
  static lblByProductTab = element(by.xpath("//a[text()='By Product']"));
  static btnAddCategory = element(by.xpath("//button[@click.delegate='addProductCategory()']"));
  static lblNonExemptCategories = element(by.xpath("//th[text()='Non-Exempt Categories ']"));
  static lblExemptCategories = element(by.xpath("//h2[text()='Exempt Categories ']"));
  static lblInfoToolTipNonExempt = element(by.xpath("//th[text()='Non-Exempt Categories ']/span[1]"));
  static lblSortNonExempt = element(by.xpath("//th[text()='Non-Exempt Categories ']/span[2]"));
  static btnSimplifiedModal = element(by.xpath("//div[@id='products']//i[@click.delegate='showSimplifiedLandingModal()']"));
  static btnCloseSimplifiedModal = element(by.xpath("//button[@click.delegate='controller.cancel()']"));
  static lblInfoToolTipExempt = element(by.xpath("//th[text()='Exempt Categories ']/span[1]"));
  static lblSortExempt = element(by.xpath("//th[text()='Exempt Categories ']/span[2]"));
  static categoryList = element.all(by.xpath("//table[thead/tr/th[contains(text(),'Exempt Categories')]]/tbody//td[1]"))
  static btnActions = element.all(by.xpath("//table[thead/tr/th[contains(text(),'Exempt Categories')]]/tbody//td[2]//button"));
  static btnActionsEdit = element.all(by.xpath("//li[@click.delegate='editProductCategory(category)']"));
  static headerEditCategory = element(by.css("h3.modal-title"));
  static btnActionsDelete = element.all(by.xpath("//li[@click.delegate='deleteProductCategory(category)']"));
  static headerDeleteCategory = element(by.css("h3.modal-title"));

  //Add Category modal
  static lblAddCategory = element(by.xpath("//h3[contains(text(),'Add Category')]"));
  static inputAddCategoryName = element(by.id('inputCategoryName'));
  static characterCountText = element(by.xpath("//input[@id='inputCategoryName']/following-sibling::div"));
  static checkBoxExempt = element(by.xpath("//label[@for='checkboxCategory']"));
  static inputExemptBox = element(by.id("checkboxCategory"));
  static lblExemptOversight = element(by.xpath("//input[@id='checkboxCategory']/following-sibling::label"));
  static btnSubmitNewCategory = element(by.xpath("//button[@click.delegate='addCategory()']"));
  static btnCancelAddNewCategory = element(by.xpath("//button[@click.delegate='addCategory()']/following-sibling::button"));
  static errDuplicateCategory = element(by.xpath("//span[@class='text-danger']"));
  static lblPotentialMatchMessage = element(by.xpath("//div[@class='ux-dialog-padding']/div/span"));
  static potentialMatchList = element(by.xpath("//div[@class='ux-dialog-padding']/div/ul/li"));

 //By product
 static selectCategories = element(by.xpath("//select[@title='Select category']"));
 static inputSearch = element(by.xpath("//div[@id='productTab']//input[@id='search']"));
 static checkSelectAll = element(by.id("checkboxP1Thead"));
 static btnReassign = element(by.xpath("//div[@id='productTab']/span/button"));
 static lblShow = element(by.xpath("//div[@id='productTab']/label[@for='inputContact']"));
 static lblVendorName = element(by.xpath("//div[@id='productTab']//table//th[2]/span[2]"));
 static lblProductName = element(by.xpath("//div[@id='productTab']//table//th[3]/span[2]"));
 static lblCurrentCategory = element(by.xpath("//div[@id='productTab']//table//th[4]"));
 static lblExempt = element(by.xpath("//div[@id='productTab']//table//th[5]"));
 static btnAssign = element(by.xpath("//div[@id='productTab']/table/tbody//td//span"));

static dropDownfilter = element(by.xpath("//button[@click.trigger='onDropDownClick()']"));
static categoryListbyProduct = element.all(by.xpath("//div[@id='productTab']/table/tbody/tr[1]"));
static txtSearchCategory = element(by.xpath("//input[@value.bind='searchText']"));
static btnSelectAll = element(by.id("category-dropdown__select-all-btn"));
static btnDeSelectAll = element(by.id("category-dropdown__deselect-all-btn"));
static listCategory = element.all(by.xpath("//ul[@id='category-dropdown-list-container']/li/a"));
static btnCheck = element(by.xpath("//span[@id='category-dropdown-list-item-0--check-mark']"));
static errNoResult = element(by.xpath("//ul[@id='category-dropdown-list-container']/li[@id='category-dropdown-no-list-item']"));

  //Delete Category Modal
  static headerDeleteCategoryItem = element(by.css("h3.modal-title"));
  static categoryName = element(by.xpath("//div[@class='ux-dialog-padding']//div[contains(@class,'category-name')]"));
  static btnConfirm = element(by.xpath("//button[@click.trigger='deleteCategory()']"));
  static btnCancel = element(by.xpath("//button[@click.trigger='deleteCategory()']/following-sibling::button"));
  static productCount = element(by.xpath("//div[@class='ux-dialog-padding']//p/span[@class='strong']"));
  static oldCategoryName = element(by.xpath("//div[@class='ux-dialog-padding']//div[contains(@class,'category-name')]"));
  static selectNewCategory = element(by.xpath("//div[@class='ux-dialog-padding']//div[contains(@class,'category-select')]"));
  static newCategorySearchBox = element(by.xpath("//div[@class='bs-searchbox']/input[@value.bind='searchString']"));
  static newCategoryList = element.all(by.xpath("//div[contains(@class,'category-select')]//ul[@role='listbox']//a/span"));
  static btnDeleteReassign = element(by.xpath("//button[@click.trigger='deleteAndReassignCategory()']"));
  static btnCancelDeleteReassign = element(by.xpath("//button[@click.trigger='deleteAndReassignCategory()']/following-sibling::button"));

//Assign/Reassign
static SelectCategorySearch = element(by.xpath("//input[@id='dropdown-category-dropdown__search-input']"));
static NoCategoryAssignedOption = element(by.xpath("//span[text()='No category assigned']"));
static AdminPanelHeader = element(by.xpath("//h1[text()='Admin Panel' and @class = 'text-primary inline']"));
static NoResult = element(by.xpath("//div[contains(text(),'Showing')]"));
static VendorSelected = element(by.xpath("//td[@class='w-25-percent name-wrap']"));
static AddCategory = element(by.xpath("//div[@id='qa_add_category_0']"));
static SelectCategory = element(by.xpath("//span[text()='select category']"));
static SelectDropDownOption = element(by.xpath("//span[@class='text m-0']"));
static AssignCategoryButton = element(by.xpath("//button[text()='Assign Category']"));
static DeselectAllOption = element(by.xpath("//button[@id='category-dropdown__deselect-all-btn']"));
static SearchOption = element(by.xpath("//input[@id='search' and @type='text']"));
static verfyCategry = element(by.xpath("//td[@class='w-25-percent']"));
static chkbox = element(by.xpath("//div[@class= 'checkbox checkbox-primary']//input[@type = 'checkbox']"));
static ReassignButton = element(by.xpath("//button[contains(text(),'Reassign')]"));
static ReassignModal = element(by.xpath("//h3[text()='Reassign category']"));
static ReassignOptions = element(by.xpath("//a[@class='no-wrap']"));
static ReassignConfirmButton = element(by.xpath("//button[text()='Confirm']"));
static CancelButton = element(by.xpath("//button[text()='Cancel' and @click.delegate= 'controller.cancel()']"));
static NoCatgryAssigned = element(by.xpath("//span[@id='dropdown-category-dropdown__btn--text']"));
static prdctNameSelected = element(by.xpath("//td[@class = 'w-35-percent name-wrap']"));

//Pagination -
static CountRow = element.all(by.xpath("//td[@class='w-25-percent name-wrap']"));
static PageCount = element.all(by.xpath("//span[@class='au-target m-r-xs pointer text-primary strong' and 'color: rgb(106,166,21)']"));
static prdctcategry = element(by.xpath("//span[text()='Product Categories']"));
static byprdcttab = element(by.xpath("//a[text()='By Product']"));
static page50 = element(by.xpath("//span[@class='resultsPerPage']/following-sibling::span[2]"));
static page100 = element(by.xpath("//span[@class='resultsPerPage']/following-sibling::span[3]"));
static page200 = element(by.xpath("//span[@class='resultsPerPage']/following-sibling::span[4]"));

}


