import TestActions from '../support/PageResource/TestActions'
const Test = new TestActions;
context('saucedemo', ()=>{
 
        it('standard_User', ()=>{
            // Standard user login scenerio
            cy.visit('/');
           cy.fixture("LoginScenerio").then((Log)=>{
         //wait for username field to load 
           Test.pageWait(Log.userName);
           Test.typeAValue(Log.userName,Log.Name1);
           Test.typeAValue(Log.passWord,Log.userPassWord);
           Test.pageWait(Log.passWord);
           Test.clickElement(Log.loginButton);
           cy.wait(3000);
           Test.pageWait(Log.globalFilter);
           //Test.selectOptions(Log.globalFilter);
          //Test.viewElementText(Log.Filter1,Log.Filter1Text)
           Test.pageWait(Log.product1)
           cy.wait(1000);
           Test.clickElement(Log.product1);
           cy.wait(1000);
           Test.clickElement(Log.product2);
           cy.wait(1000);
           Test.clickElement(Log.product3);
           cy.wait(1000);
           Test.clickElement(Log.cart);
           cy.wait(1000);
           Test.clickElement(Log.removeFromCart);
           cy.wait(1000);
           Test.clickElement(Log.checkout);
           cy.wait(1000);
           Test.typeAValue(Log.firstName,Log.Name2);
           Test.typeAValue(Log.lastName,Log.Name3);
           Test.typeAValue(Log.postalCode,Log.pCODE);
           Test.clickElement(Log.continue);
           Test.clickElement(Log.finish);
           Test.clickElement(Log.back);
           Test.clickElement(Log.menu);
           Test.clickElement(Log.logout)






           });
        });
});
    