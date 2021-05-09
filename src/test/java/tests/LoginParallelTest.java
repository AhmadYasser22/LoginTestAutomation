package tests;

import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;
import pages.*;

public class LoginParallelTest extends BaseTest2 {
    public HomePageParallel homePage;
    public LoginPageParallel login;
    protected SecurePageParallel secure;

    @Test
    public void testlogin(){

        homePage = new HomePageParallel(getDriver());
        homePage.clickFormAuthentication();
        login = new LoginPageParallel(getDriver());
        login.setUsername("tomsmith");
        login.setPassword("SuperSecretPassword!");
        login.clicklogin();
        secure = new SecurePageParallel(getDriver());
        secure.check();
    }
}
