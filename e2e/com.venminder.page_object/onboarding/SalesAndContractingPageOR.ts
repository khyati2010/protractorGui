import { element, by } from "protractor";
import { LoginPageOR } from "../shared/LoginPageOR";

export class SalesAndContractingOR extends LoginPageOR {
  salesAndContractingTab = element(
    by.xpath("//*[contains(text(),'Sales and Contracting')]")
  );

  newClientSaleTab = element(
    by.xpath("//*[contains(text(),'New Client Sale')]")
  );

  clientSearchTxtBox = element(by.id("FI_Search"));
  clientSearchSubmitBtn = element(by.id("searchBtn"));
  clientsTable = element(by.id("FISearch_AddFIDetails"));
}
