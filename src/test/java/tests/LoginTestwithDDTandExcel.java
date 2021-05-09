package tests;

import data.ExcelReader;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import java.io.IOException;

public class LoginTestwithDDTandExcel extends BaseTest {

    @DataProvider(name="ExcelData")
    public Object[][] userRegisterData() throws IOException
    {
        // get data from Excel Reader class
        ExcelReader ER = new ExcelReader();
        return ER.getExcelData();
    }

    @Test(dataProvider = "ExcelData")
    public void loginwithexcel(String username,String password){
        login = homePage.clickFormAuthentication();
        login.setUsername(username);
        login.setPassword(password);
        secure = login.clicklogin();
        secure.check();
    }

}
