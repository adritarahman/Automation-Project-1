const homeObjects=require("./homeObjects");

class HomeActions{
 async ClickOnSearch(){
    await homeObjects.searchIcon.click();
 }

 async enterSearchedProduct(ProductName){
    await homeObjects.searchInputField.setValue(ProductName);
 }
 
 

}

module.exports=new HomeActions();