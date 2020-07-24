beforeEach(() => {
    cy.visit('https://conifer.rhizome.org');


})



function cyLogin(){
    cy.get('.navbar-user-links > :nth-child(6) > .btn').click();
    cy.fixture('users.json').then((user) => {
        cy.get('#username').type(user.username);
        cy.get('#password').type(user.password);
     })
     cy.get('#loginform > .btn').click();
}

//https://github.com/cypress-io/cypress/issues/136

it('login to forum', () => {
    cyLogin();

})