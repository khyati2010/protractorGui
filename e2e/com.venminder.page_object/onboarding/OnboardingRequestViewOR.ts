import { element, by } from 'protractor';

export class OnboardingVendorRequestViewOR {

    static statusTab = element(by.xpath("//*[@class='hidden-xs vm-text-elipsis' and contains(text(),'Status')]"));
}