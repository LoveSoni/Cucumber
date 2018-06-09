package stepDefination;

import java.util.concurrent.TimeUnit;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination {
	public static WebDriver driver;
	@Given("^User is on LoginPage$")
	public void user_is_on_LoginPage() {
		System.setProperty("webdriver.gecko.driver", "D:\\Love_Testing\\Senium_Naveen\\gecko_Driver\\geckodriver-v0.20.1-win64\\geckodriver.exe");
		driver=new FirefoxDriver();
		driver.get("https://www.freecrm.com/index.html");
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	    
	}

	@When("^title of LoginPage is FreeCrm$")
	public void title_of_LoginPage_is_FreeCrm() {
		String title=	driver.getTitle();
		Assert.assertEquals(title, "Free CRM software in the cloud powers sales and customer service");
		
	}

	@Then("^user can enter details$")
	public void user_can_enter_details()  {
		driver.findElement(By.name("username")).sendKeys("LoveSoni");
		driver.findElement(By.name("password")).sendKeys("Monster123energy");
	
	}

	@Then("^user can click on the login button$")
	public void user_can_click_on_the_login_button() throws InterruptedException {
		Thread.sleep(3000);
		driver.findElement(By.xpath("//input[@class='btn btn-small']")).click();
	
	}
	@Then("^user on home page$")
	public void user_on_home_page()
	{
		String title=driver.getTitle();
		Assert.assertEquals(title,"CRMPRO");
	}
	@Given("^user on the home page$")
	public void user_on_the_home_page() throws Throwable 
	{
		String title=driver.getTitle();
		Assert.assertEquals(title, "CRMPRO");
	}

	@When("^user move over on the contact$")
	public void user_move_over_on_the_contact() throws Throwable {
	Actions act=new Actions(driver);
		driver.switchTo().frame("mainpanel");
		Thread.sleep(2000);
		act.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
	}

	@Then("^user click on the new contact$")
	public void user_click_on_the_new_contact() throws Throwable {
		Thread.sleep(4000);
		driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
	}

	@Then("^user enter first name and lastname$")
	public void user_enter_first_name_and_lastname() throws Throwable {
		driver.findElement(By.xpath("//input[@name='first_name']")).sendKeys("asdf");
		driver.findElement(By.xpath("//input[@name='surname']")).sendKeys("last");
	
	
	}

	@Then("^user click on Save button$")
	public void user_click_on_Save_button() throws Throwable {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//input[@type='button' and @value='Load From Company']//following-sibling::input[1]")).click();
	}

	@Then("^verify new contact created$")
	public void verify_new_contact_created() throws Throwable {
	boolean bol=	driver.findElement(By.xpath("//td[contains(text(),'abc sdfsd') and @class='datacardtitle']")).isDisplayed();
		Assert.assertTrue(bol);
	}

	@Then("^close browser$")
	public void close_browser()
	{
		driver.quit();
	}
	
}
