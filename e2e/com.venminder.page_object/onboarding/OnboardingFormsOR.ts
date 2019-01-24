import { element, by } from "protractor";
import { LoginPageOR } from "../shared/LoginPageOR";

export class OnboardingFormsOR extends LoginPageOR {
  onboardingFormsTab = element(by.id("onboardingFormsTab"));
  masterFromTitle = element(by.xpath("//*[contains(text(),'Master Form')]"));
  masterFormTable = element(by.id("masterForms"));
  clientMasterForm = element(by.xpath("//*[@id='masterForms']/tbody/tr/td[1]"));
  customFormTable = element(by.id("sortable-customForms"));
  masterFormActionBtn = element(by.id("master-form-actions"));
  masterFormActionViewBtn = element(by.id("view-masterForm"));
  masterFormActionCloneBtn = element(by.id("cloneto-custom"));
  customFormActionBtn = element(by.id("custom-actions"));
  customFormActionCloneBtn = element(
    by.xpath("//*[@id='sortable-customForms']/tbody/tr/td[5]/div/ul/li[1]/a")
  );
  customFormActionEditBtn = element(by.id("edit-customForm"));
  customFormActionViewBtn = element(by.id("view-customForm"));
  customFormActionDeleteBtn = element(by.id("delete-customForm"));
  addNewMasterFormBtn = element(by.id("add-master-form"));
  vendorInformationTitle = element(
    by.xpath("//*[contains(text(),'Vendor Information')]")
  );
  importVendorProfileFieldsBtn = element(
    by.xpath("//*[contains(text(),'Import Vendor Profile Fields')]")
  );
  vendorInformationSection = element.all(
    by.xpath(
      "//*[@id='onboardingMasterForm']/div/div[1]/div/div[2]/div[2]/form"
    )
  );
  productInformationSection = element.all(
    by.xpath("//*[@id='onboardingMasterForm']/div/div[1]/div/div[3]/div[2]")
  );
  pricingInformationSection = element.all(
    by.xpath("//*[@id='onboardingMasterForm']/div/div[1]/div/div[4]/div[2]")
  );
  criticalQuestionSection = element(
    by.xpath(
      "//*[@id='onboardingMasterForm']/div/div[1]/div/div[5]/div[2]/div/input[1]"
    )
  );
  saveFormBtn = element(by.xpath("//*[contains(text(),'Save Form')]"));
}
