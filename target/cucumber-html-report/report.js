$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "User Login",
  "description": "I want to check that the user can login",
  "id": "user-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User Login",
  "description": "",
  "id": "user-login;user-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on authentication form",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I entered \"\u003cusername\u003e\" , \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "The secure page displayed successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "user-login;user-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "user-login;user-login;;1"
    },
    {
      "cells": [
        "tomsmith",
        "SuperSecretPassword!"
      ],
      "line": 12,
      "id": "user-login;user-login;;2"
    },
    {
      "cells": [
        "Ahmed",
        "Yasser"
      ],
      "line": 13,
      "id": "user-login;user-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "User Login",
  "description": "",
  "id": "user-login;user-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on authentication form",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I entered \"tomsmith\" , \"SuperSecretPassword!\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "The secure page displayed successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeature.the_user_in_the_home_page()"
});
formatter.result({
  "duration": 21921904246,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeature.i_click_on_authentication_form()"
});
formatter.result({
  "duration": 1910274114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 11
    },
    {
      "val": "SuperSecretPassword!",
      "offset": 24
    }
  ],
  "location": "LoginFeature.i_entered(String,String)"
});
formatter.result({
  "duration": 179173720,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeature.the_secure_page_displayed_successfully()"
});
formatter.result({
  "duration": 1158637060,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User Login",
  "description": "",
  "id": "user-login;user-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the user in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on authentication form",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I entered \"Ahmed\" , \"Yasser\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "The secure page displayed successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeature.the_user_in_the_home_page()"
});
formatter.result({
  "duration": 26652681802,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeature.i_click_on_authentication_form()"
});
formatter.result({
  "duration": 1698398961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ahmed",
      "offset": 11
    },
    {
      "val": "Yasser",
      "offset": 21
    }
  ],
  "location": "LoginFeature.i_entered(String,String)"
});
formatter.result({
  "duration": 499897830,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeature.the_secure_page_displayed_successfully()"
});
formatter.result({
  "duration": 348912331,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[normalize-space()\u003d\u0027Secure Area\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027AHMAD-PC\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\Ahmad\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:19507}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c2b3999a5a3ee3d5a47ed5cc32cabae7\n*** Element info: {Using\u003dxpath, value\u003d//h2[normalize-space()\u003d\u0027Secure Area\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat pages.SecurePage.check(SecurePage.java:25)\r\n\tat Steps.LoginFeature.the_secure_page_displayed_successfully(LoginFeature.java:43)\r\n\tat ✽.Then The secure page displayed successfully(login.feature:8)\r\n",
  "status": "failed"
});
});