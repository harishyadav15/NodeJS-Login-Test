var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().window().maximize();

driver.get('https://forio.com/epicenter/sign-in');

var loginId = driver.findElement({xpath:'//input[@name="email"]'});
	loginId.sendKeys('harishyadav.lavrick@gmail.com');

var passwd = driver.findElement(By.xpath("//input[@name='password']"));

	passwd.sendKeys('Salman@15');

var submit = driver.findElement(By.xpath("//div[@id='register-or-sign-in']//button"));
	submit.click();

driver.getTitle().then(function(title) {console.log(title);});

driver.quit();