const ProductDetailsObjects=require("./ProductDetailsObjects");

class ProductDetailsActions{

    async selectProductFromList(ProductName){
        await ProductDetailsObjects.ProductFromList(ProductName).click();
    }    

}