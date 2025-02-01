class ProductDetailsObjects{

    ProductFromList(ProductName){
       
       return $(`(//span[contains(text(),'${ProductName}')])[2]`);
       //(//span[contains(text(),'Nike react phantom')])[2]
    }

    ProductSize(size){
        return $(`//a[@href='#' and text()='${size}']`);
    }
    
    ProductColor(color){
        return $(`//a[@href='#' and text()='${color}']`);
    }

    get singleProductPrice(){
        return $("//span[@class='sale-price']");
    }

    get singleProductName(){
        return $("//h1[@class='product-single-name']");
    }

    get qtyInputField(){
        return $("//input[@placeholder='Qty']");
    }

    get AddToCartBtn(){
        return $("//button[@class='button primary outline']");
    }
}

module.exports=new ProductDetailsObjects();