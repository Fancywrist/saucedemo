class TestActions{
clickElement(element){
    cy.get(element).click();
}
typeAValue(field, text){
    cy.get(field).type(text);
}
pageWait(element){
    cy.get(element).should('be.visible');
}
viewElementText(element, text){
    cy.get(element).should('contains', text);
}
}
export default TestActions