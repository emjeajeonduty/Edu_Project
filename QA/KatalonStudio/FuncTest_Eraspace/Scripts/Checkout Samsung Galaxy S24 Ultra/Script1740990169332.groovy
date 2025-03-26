import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

Mobile.comment('Finding Item')

Mobile.scrollToText('Samsung Galaxy S24 Ultra', FailureHandling.STOP_ON_FAILURE)

Mobile.delay(5, FailureHandling.STOP_ON_FAILURE)

Mobile.comment('Tap SG S24 Ultra')

Mobile.tap(findTestObject('SG_S24Ultra/Samsung Galaxy S24 Ultra'), 0)

Mobile.delay(10, FailureHandling.STOP_ON_FAILURE)

Mobile.comment('Tap Keranjang')

Mobile.tap(findTestObject('SG_S24Ultra/Button - Keranjang'), 0)

Mobile.delay(5, FailureHandling.STOP_ON_FAILURE)

Mobile.comment('Select Variant - Warna')

Mobile.tap(findTestObject('SG_S24Ultra/RadioButton - Titanium Black'), 0)

Mobile.delay(3, FailureHandling.STOP_ON_FAILURE)

Mobile.comment('Select Variant - Kapasitas')

Mobile.tap(findTestObject('SG_S24Ultra/RadioButton - 256 GB'), 0)

Mobile.delay(3, FailureHandling.STOP_ON_FAILURE)

Mobile.comment('Tap Keranjang')

Mobile.tap(findTestObject('SG_S24Ultra/Button - Keranjang'), 0)

Mobile.delay(5, FailureHandling.STOP_ON_FAILURE)

Mobile.comment('Tap Metode Pemesanan')

Mobile.tap(findTestObject('SG_S24Ultra/Menu - Click  PickUp'), 0)

Mobile.delay(3, FailureHandling.STOP_ON_FAILURE)

Mobile.comment('Tap Keranjang')

Mobile.tap(findTestObject('SG_S24Ultra/Button - Keranjang (1)'), 0)

Mobile.delay(5, FailureHandling.STOP_ON_FAILURE)

Mobile.comment('Tap Lihat Keranjang')

Mobile.tap(findTestObject('SG_S24Ultra/Button - Lihat Keranjang'), 0)

Mobile.delay(5, FailureHandling.STOP_ON_FAILURE)

