class ProductDetailsObjects{

    async ProductFromList(ProductName){
       return $(`//span[contains(text,('${ProductName}')]`)
    }

    async ProductSize(size){
        return $(`//a[@href='#' and text()='${size}']`);
    }
    
    async ProductColor(color){
        return $(`//a[@href='#' and text()='${color}']`);
    }

    get qtyInputField(){
        return $("//input[@placeholder='Qty']");
    }
}

module.exports=new ProductDetailsObjects();