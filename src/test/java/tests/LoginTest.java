package tests;

import org.testng.annotations.Test;
import pages.LoginPage;
import pages.SecurePage;

public class LoginTest extends BaseTest {

    @Test
    public void testlogin(){

        login = homePage.clickFormAuthentication();
        login.setUsername("tomsmith");
        login.setPassword("SuperSecretPassword!");
        secure = login.clicklogin();
        secure.check();
    }
}
