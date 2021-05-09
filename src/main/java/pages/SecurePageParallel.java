package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import static org.testng.Assert.assertTrue;

public class SecurePageParallel {
    WebDriver driver;

    public SecurePageParallel(WebDriver loginpagedriver) {
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
