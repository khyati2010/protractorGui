import { element, by } from "protractor";

export class VendorDashboardPageOR {
  static headerVendorDashboard = element(by.css("div.banner-title.white.p-sm"));
  static labelVendorName = element(by.css("div.vendor-name>h1"));
  static buttonDeleteIcon = element(by.css("div.vendor-name>h1>i"));
}
