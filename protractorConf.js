'use strict';
const fs = require('fs');
const SpecReporter = require('jasmine-spec-reporter');
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {

    allScriptsTimeout: 360000,
    specs: [
        './e2e/com.venminder.specs/onboarding/OnboardingVendorRequestViewTest.ts'
    ],

    exclude: [],
    multiCapabilities: [{
        'browserName': 'chrome',
        'platform': 'ANY',
        'chromeOptions': {
            'args': ['--disable-extensions', 'disable-infobars']
        }
    }],
    directConnect: true,
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 360000
    },
    // Spec patterns are relative to the location of the spec file. They may
    // include glob patterns.
    suites: {
        sla: 'e2e/com.venminder.specs/sla/*.ts',
        dashboard: 'e2e/com.venminder.specs/dashboard/*.ts',
        onboarding: 'e2e/com.venminder.specs/onboarding/*.ts',
        user_roles: ''
    },
    beforeLaunch: () => {
        require('ts-node').register({
            project: 'e2e'
        });
    },
    onPrepare: () => {
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.manage().timeouts().pageLoadTimeout(90000);
        browser.manage().timeouts().implicitlyWait(60000);

        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: 'all' }));


        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });

    }
};