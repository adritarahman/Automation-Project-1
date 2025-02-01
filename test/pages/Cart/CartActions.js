const CartObjects=require("./CartObjects");
const Utilites=require("../../Utility/utilities");

class CartActions{
   async clickViewCartBtn(){
    await CartObjects.ViewCartBtn.click();
   }

   async getProductNameFromCart(){
    return await CartObjects.ProductNameInCart.getText();
   }

   async getGrandTotalFromCart(){
    const grandTotal= await CartObjects.grandTotalPrice.getText();
    return Utilites.textToNumber(grandTotal);
   }


}

module.exports=new CartActions();