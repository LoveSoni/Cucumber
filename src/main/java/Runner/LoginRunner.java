package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

	@RunWith(Cucumber.class)
	@CucumberOptions(
			features = "D:\\Naveen Automation\\java Practical\\cucumberBDD\\src\\main\\java\\Features\\login.feature"//the path of the feature files
			,glue={"stepDefination"}//the path of the step definition files
			,format={"pretty","html:test-output"}
			) 
public class LoginRunner {
	
}
