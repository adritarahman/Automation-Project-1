class CartObjects{
 
    get ViewCartBtn(){
        return $("//a[@class='add-cart-popup-button']");
    }

    get ProductNameInCart(){
        return $("//a[@class='name font-semibold hover:underline']")
    }

    get grandTotalPrice(){
        return $("//div[@class='grand-total-value']");
    }



}

module.exports=new CartObjects();