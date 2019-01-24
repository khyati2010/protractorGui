'use strict';
const fs = require('fs');
const SpecReporter = require('jasmine-spec-reporter');
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

    params: {
        login: {
            url: 'default',

        }
    },

    allScriptsTimeout: 360000,

    specs: [
        './e2e/com.venminder.specs/sla/SlaCreateTest.ts',

    ],

    exclude: [],
    multiCapabilities: [{

        'browserName': 'chrome',
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

    beforeLaunch: () => {
        require('ts-node').register({
            project: 'e2e'
        });
    },
    onPrepare: () => {
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();

        browser.manage().timeouts().implicitlyWait(60000);
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-result'
        }));
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });

        browser.get(browser.params.login.url);
        element(by.id('Username')).sendKeys('testy.tester@entclient1.com');
        element(by.id('Password')).sendKeys("Digital123");
        element(by.xpath("//button[@value='login']")).click();


    }
};