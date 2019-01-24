import { element, by } from "protractor";

export class UserRolesOR {
    static headerAdminPanel = element(by.xpath("//div[@class='heading']/h1[text()='Admin Panel']"));
    static headerUserRoles = element(by.xpath("//div[@class='heading']//h2"));
    static headerProductCategories = element(by.xpath("//h2[text()='Product Categories']"));
    static headerOversightrequirements = element(by.xpath("//h2[text()='Oversight Requirements']"));
    static headerSystemSettings = element(by.xpath("//h2[text()='Settings']"));
    static adminPanelMenuTab = element.all(by.css("ul[role*='tablist']>li>a"));
    static userRolesTab = element(by.xpath("//span[contains(text(),'User Roles')]"));
    static productCategoryTab = element(by.xpath("//span[contains(text(),'Product Categories')]"));
    static oversightRequirementTab = element(by.xpath("//span[contains(text(),'Oversight Requirements')]"));
    static systemSettingTab = element(by.xpath("//span[contains(text(),'System Settings')]"));
}