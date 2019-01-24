import { BasePage } from "../shared/BasePage";
import { UserRolesPage } from "./UserRolesPage";
import { TextBox } from "../../com.venminder.utilities/TextBox";
import { Click } from "../../com.venminder.utilities/Click";
import { SelectDropDown } from "../../com.venminder.utilities/SelectDropDown";
import { AdminPanelData } from "../../com.venminder.testdata/TestData";
import { protractor, browser } from "protractor";
import { ProductCategoriesOR } from "../../com.venminder.page_object/AdminPanel/ProductCategoriesOR";
import { SystemSettingsOR } from "../../com.venminder.page_object/AdminPanel/SystemSettingsOR";
const until = protractor.ExpectedConditions;

export class SystemSettingsPage extends BasePage {
    textbox = new TextBox();
    click = new Click();
    select = new SelectDropDown();

    verifySystemSettingScreen(){
        SystemSettingsOR.lblAdminPanel.isDisplayed().then(isDisplayed => {
            this.assertEquals(isDisplayed, true);
            console.log("Admin panel label is visible on system setting screen.");
        });
        SystemSettingsOR.lblSettings.isDisplayed().then(isDisplayed => {
            this.assertEquals(isDisplayed, true);
            console.log("Settings label is visible on system setting screen.");
        });
        SystemSettingsOR.lblRiskApprovalSettings.isDisplayed().then(isDisplayed => {
            this.assertEquals(isDisplayed, true);
            console.log("Risk Approval Setting label is visible on system setting screen.");
        });
        SystemSettingsOR.lblDocumentStorage.isDisplayed().then(isDisplayed => {
            this.assertEquals(isDisplayed, true);
            console.log("Document storage label is visible on system setting screen.");
        });
        SystemSettingsOR.lblServicePermissions.isDisplayed().then(isDisplayed => {
            this.assertEquals(isDisplayed, true);
            console.log("Service Permissions label is visible on system setting screen.");
        });
    }

    changeRiskApproverSetting(){
        SystemSettingsOR.btnRiskApprovalSettings.isDisplayed().then(isDisplayed => {
            this.assertEquals(isDisplayed,true);
            this.click.buttonClick(SystemSettingsOR.btnRiskApprovalSettings);
        })
    }

    selectFromList(data : string){
        SystemSettingsOR.dropDownDownload.isDisplayed().then(isDisplayed => {
            this.assertEquals(isDisplayed,true);
            this.select.selectElementByText(SystemSettingsOR.dropDownDownload, data);
        });
        SystemSettingsOR.dropDownDownload.$('option:checked').getText().then(text => {
            this.assertEquals(text,data);
          });
    }

    clickRiskSaveSetting(){
        SystemSettingsOR.btnRiskSaveSettings.isDisplayed().then(isDisplayed => {
            this.assertEquals(isDisplayed,true);
            this.click.buttonClick(SystemSettingsOR.btnRiskSaveSettings);
        })
    }

    clickRiskCancelSetting(){
        SystemSettingsOR.btnRiskCancelSettings.isDisplayed().then(isDisplayed => {
            this.assertEquals(isDisplayed,true);
            this.click.buttonClick(SystemSettingsOR.btnRiskCancelSettings);
        })
    }

    verifyRiskApproversCount(){
        SystemSettingsOR.lblNumberOfRiskApprovers.isDisplayed().then(isDisplayed => {
            this.assertEquals(isDisplayed,true);
            let countRiskApproversFromLabel = SystemSettingsOR.lblNumberOfRiskApprovers.getText();
            SystemSettingsOR.riskApproverList.each((element) => {
                let countRiskApproversFromList = SystemSettingsOR.riskApproverList.count();
                this.assertEquals(countRiskApproversFromList.toString().trim(), countRiskApproversFromLabel);
            });
        });
    }

    clickDocumentStorageSaveSetting(){
        SystemSettingsOR.btnDocumentSaveSettings.isDisplayed().then(isDisplayed => {
            this.assertEquals(isDisplayed,true);
            this.click.buttonClick(SystemSettingsOR.btnDocumentSaveSettings);
        })
    }

    clickDocumentStorageCancelSetting(){
        SystemSettingsOR.btnDocumentCancelSettings.isDisplayed().then(isDisplayed => {
            this.assertEquals(isDisplayed,true);
            this.click.buttonClick(SystemSettingsOR.btnDocumentCancelSettings);
        })
    }

   clickServicePermissionSaveSetting(){
    SystemSettingsOR.btnServiceSaveSettings.isDisplayed().then(isDisplayed => {
        this.assertEquals(isDisplayed,true);
        this.click.buttonClick(SystemSettingsOR.btnServiceSaveSettings);
    })
    }

    clickServicePermissionCancelSetting(){
        SystemSettingsOR.btnServiceCancelSettings.isDisplayed().then(isDisplayed => {
            this.assertEquals(isDisplayed,true);
            this.click.buttonClick(SystemSettingsOR.btnServiceCancelSettings);
        })
    }
 
}
