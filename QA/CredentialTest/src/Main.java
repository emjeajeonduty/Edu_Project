import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
public class Main {
	public static void main(String[]args) {
		ChromeDriver driver = new ChromeDriver();
		Data data = new Data();
		driver.get("https://magento.softwaretestingboard.com/");
		
		//Login Account with Valid Data
			driver.findElement(By.xpath("//div[@class='panel header']//a[contains(.,'Sign In')]")).click();
			//Input Uname and Pwd
			driver.findElement(By.xpath("//input[@id='email']")).sendKeys(data.v_uname);
			driver.findElement(By.xpath("//input[@id='pass']")).sendKeys(data.v_pwd);
			//Hit button Sign In
			driver.findElement(By.id("send2")).click();
			//Logout
			driver.findElement(By.xpath("//button[@type='button']")).click();
			driver.findElement(By.xpath("//a[normalize-space()='Sign Out']")).click();
			
		//Login Account with Invalid Data
			driver.findElement(By.xpath("//div[@class='panel header']//a[contains(.,'Sign In')]")).click();
			//Input Uname and Pwd
			driver.findElement(By.xpath("//input[@id='email']")).sendKeys(data.iv_uname);
			driver.findElement(By.xpath("//input[@id='pass']")).sendKeys(data.iv_pwd);
			//Hit button Sign In
			driver.findElement(By.id("send2")).click();
	}
}