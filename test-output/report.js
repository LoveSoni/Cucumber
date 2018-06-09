$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Naveen Automation/java Practical/cucumberBDD/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Fre CRM Login test scenario",
  "description": "",
  "id": "free-crm-login-feature;fre-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of LoginPage is FreeCrm",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user can enter details",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user can click on the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_LoginPage()"
});
formatter.result({
  "duration": 20789941773,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_LoginPage_is_FreeCrm()"
});
formatter.result({
  "duration": 10750455,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_can_enter_details()"
});
formatter.result({
  "duration": 187460835,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_can_click_on_the_login_button()"
});
formatter.result({
  "duration": 10580908059,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_on_home_page()"
});
formatter.result({
  "duration": 6620528,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "create new contact",
  "description": "",
  "id": "free-crm-login-feature;create-new-contact",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user move over on the contact",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user click on the new contact",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enter first name and lastname",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user click on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "verify new contact created",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_on_the_home_page()"
});
formatter.result({
  "duration": 9171789,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_move_over_on_the_contact()"
});
formatter.result({
  "duration": 2413820809,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_the_new_contact()"
});
formatter.result({
  "duration": 6946986423,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enter_first_name_and_lastname()"
});
formatter.result({
  "duration": 83125955,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_Save_button()"
});
formatter.result({
  "duration": 3886738535,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.verify_new_contact_created()"
});
formatter.result({
  "duration": 20204547032,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //td[contains(text(),\u0027abc sdfsd\u0027) and @class\u003d\u0027datacardtitle\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-OHEAHH8\u0027, ip: \u0027192.168.1.202\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 60.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 6244, moz:profile: C:\\Users\\Love\\AppData\\Local..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: XP, platformName: XP, platformVersion: 10.0, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 637f37d6-5ba9-4173-a4a1-b04ff65d4207\n*** Element info: {Using\u003dxpath, value\u003d//td[contains(text(),\u0027abc sdfsd\u0027) and @class\u003d\u0027datacardtitle\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat stepDefination.LoginStepDefination.verify_new_contact_created(LoginStepDefination.java:91)\r\n\tat ✽.Then verify new contact created(D:/Naveen Automation/java Practical/cucumberBDD/src/main/java/Features/login.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});