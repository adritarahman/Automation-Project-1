const homeActions = require("../pages/Home/homeActions");
const ProductDetailsActions=require("../pages/ProductDetails/ProductDetailsActions");
const CartActions=require("../pages/Cart/CartActions");



let searchedName="Nike react phantom";
let size="S";
let color="Black";
let qty=2;
let ProductName="";

describe("Demo Evershop site search",()=>{
    it("Search with valid product",async()=>{
         await homeActions.ClickOnSearch();
         await homeActions.enterSearchedProduct(searchedName);
         await browser.keys("Enter");
         

    });

    it("Add Product To Cart",async()=>{
        await ProductDetailsActions.selectProductFromList(searchedName);
        ProductName=await ProductDetailsActions.getProductName();
        await ProductDetailsActions.selectSize(size);
        await ProductDetailsActions.selectColor(color);
        await ProductDetailsActions.enterQtyField(qty);
        await ProductDetailsActions.clickOnAddToCartBtn();
        await CartActions.clickViewCartBtn();
    });

    it("Varify Name in AddToCart Page",async()=>{
         
         let actualName=await CartActions.getProductNameFromCart();
         expectedName=ProductName;
         await expect(expectedName.toLowerCase()).toEqual(actualName.toLowerCase());
         
    });
   
    it("Varify total price in AddToCart Page",async()=>{
         
        const actualPrice=await CartActions.getGrandTotalFromCart();
        const singlePrice=await ProductDetailsActions.getSingleProductPrice();
        const expectedPrice=qty*singlePrice;
        
        await expect(expectedPrice).toEqual(actualPrice);
   });



    
})

