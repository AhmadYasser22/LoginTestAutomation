package tests;

import com.opencsv.CSVReader;
import org.testng.annotations.Test;
import pages.LoginPage;
import pages.SecurePage;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;


public class LoginTestwithDDTandCSV extends BaseTest {

    CSVReader reader;

    @Test
    public void testloginwithcsv() throws IOException {

        String CSV_file = System.getProperty("user.dir") + "/src/test/java/data/logindata.csv";
        reader = new CSVReader(new FileReader(CSV_file));

        String[] csvCell;

        // while loop will be executed till the lastvalue in CSV file .
        while ((csvCell = reader.readNext()) != null) {
            String username = csvCell[0];
            String password = csvCell[1];

            login = homePage.clickFormAuthentication();
            login.setdatawithcsv(username, password);
            secure = login.clicklogin();
            secure.check();
        }
    }
}
