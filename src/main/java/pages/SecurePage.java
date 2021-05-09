package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import static org.testng.Assert.*;

public class SecurePage {

    WebDriver driver;

    public SecurePage(WebDriver loginpagedriver) {
        this.driver = loginpagedriver;
        PageFactory.initElements(driver ,this) ;
    }

    @FindBy(xpath="//h2[normalize-space()='Secure Area']")
    WebElement securearea;

    public void check(){

        assertTrue(securearea.getText()
                        .contains("Secure Area"),
                "Alert text is incorrect");
    }
}
