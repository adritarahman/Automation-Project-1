const ProductDetailsObjects=require("./ProductDetailsObjects");
const Utilites=require("../../Utility/utilities");

class ProductDetailsActions{

    async selectProductFromList(ProductName){
        await ProductDetailsObjects.ProductFromList(ProductName).click();
       
    }  
    
    async selectSize(size){
        await ProductDetailsObjects.ProductSize(size).click();
        await browser.pause(3000);
    }

    async selectColor(color){
        await ProductDetailsObjects.ProductColor(color).click();
        await browser.pause(3000);
    }

    async enterQtyField(qty){
        await ProductDetailsObjects.qtyInputField.setValue(qty);
        await browser.pause(3000);
    }

    async clickOnAddToCartBtn(){
        await ProductDetailsObjects.AddToCartBtn.click();
    }

    async getProductName(){
        return await ProductDetailsObjects.singleProductName.getText();
    }

    async getSingleProductPrice(){
        const productPrice=await ProductDetailsObjects.singleProductPrice.getText();
        return Utilites.textToNumber(productPrice);
    }
}

module.exports=new ProductDetailsActions();