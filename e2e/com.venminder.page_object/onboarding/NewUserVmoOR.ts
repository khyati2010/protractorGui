import { by, element } from "protractor";

export class NewUserVmoOR {
  static loggedInUserBtn = element(by.xpath("//*[@class='btn btn-primary btn-circle']"));
  static adminPanelBtn = element(by.xpath("//a[contains(@href,'https://sand-dev-2-rsd.venminder.com/clients/admin-panel')]"));
  static addUsertab = element(by.xpath("//button[contains(. ,'Add User')]"));
  static roleListVMO = element(by.xpath("//*[contains(text(),'VMO')]"));
  static VMOCheckBox = element(by.xpath("//ux-dialog-body/div/div[2]/table/tbody/tr[9]/td[1]/ul/li"));
  static newUserFormCancelBtn = element(by.xpath("//*[@class='btn btn-default au-target' and contains(text(),'Cancel')]"));
  static userActionBtn = element(by.xpath("//*[@id='roles']//table/tbody/tr[1]/td[6]/div/button"));
  static userActionEditBtn = element(by.xpath("//*[@id='roles']//table/tbody/tr[1]/td[6]/div/ul/li/a[contains(text(),'Edit')]"));
  static checkboxUserRoles = element.all(by.xpath("//div[@show.bind='(isActive || isCurrentUserInactive) && !isResponsibiltyTab ']//input[@checked.bind='selectedRoles']"));
  static adminCheckbox = element(by.xpath("//div[@show.bind='(isActive || isCurrentUserInactive) && !isResponsibiltyTab ']//div[@class='checkbox checkbox-primary']/label[@for='Admin']"));
}
