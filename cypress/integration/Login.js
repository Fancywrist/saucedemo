import TestActions from '../../cypress/support/PageResource/TestActions'
const Test = new TestActions;
context('saucedemo', ()=>{
 
        it('standard_User', ()=>{
            // Launch the saucedemo
            cy.visit('/');
            // Click on the Flight type to pick Round Trip
           cy.fixture("LoginScenerio").then((Log)=>{
         //wait for username field to load 
           Test.pageWait(Log.userName);
           Test.typeAValue(Log.userName,Log.Name1);
           Test.typeAValue(Log.passWord,Log.userPassWord);
           Test.pageWait(Log.passWord);
           Test.clickElement(Log.loginButton)

           });
        });
});
    