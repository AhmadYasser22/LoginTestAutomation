package tests;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;

import java.net.MalformedURLException;
import java.net.URL;

public class BaseTest2 {
    public static String BaseURL = "https://the-internet.herokuapp.com/" ;

    protected ThreadLocal<RemoteWebDriver> driver = null ;

    @BeforeClass
    @Parameters(value= {"browser"})
    public void setUp(@Optional("chrome") String browser) throws MalformedURLException
    {
        //WebDriverManager.chromedriver().setup();
        driver = new ThreadLocal<>();
        DesiredCapabilities caps = new DesiredCapabilities();
        caps.setCapability("browserName", browser);

        // Selenium Grid Local
        driver.set(new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"),caps));

        // Run on SauceLabs on Cloud
        //driver.set(new RemoteWebDriver(new URL(sauceURL),caps));

        getDriver().navigate().to(BaseURL);
    }

    public WebDriver getDriver()
    {
        return driver.get();
    }

    @AfterClass
    public void stopDriver()
    {
        getDriver().quit();
        driver.remove();
    }

}
