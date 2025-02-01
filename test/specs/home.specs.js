const homeActions = require("../pages/Home/homeActions");


let ProductName="Nike react phantom";

describe("Demo Evershop site search",()=>{
    it("Search with valid product",async()=>{
         await homeActions.ClickOnSearch();
         await homeActions.enterSearchedProduct(ProductName);
         await browser.keys("Enter");
         await homeActions.clickOnSearchedProduct();

    });

    it("")

    
})

