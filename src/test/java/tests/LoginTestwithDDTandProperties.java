package tests;

import data.LoadProperties;
import org.testng.annotations.Test;

@Test
public class LoginTestwithDDTandProperties extends BaseTest {

    public void loginwithproperties(){
        String username = LoadProperties.userData.getProperty("username");
        String password = LoadProperties.userData.getProperty("password");
        login = homePage.clickFormAuthentication();
        login.setUsername(username);
        login.setPassword(password);
        secure = login.clicklogin();
        secure.check();

    }
}
