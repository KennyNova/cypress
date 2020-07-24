beforeEach(() => {
    cy.visit('https://www.mailinator.com/');


})



function cyConfirm(){
    //var obj = cy.fixture('users.json').its('email');
    //cy.server()
    //cy.fixture('users.json').as('userJSON');
    //cy.route('GET', '/email/**', 'usersJSON')
    //console.log(this.userJSON);
    //const namema = JSON.stringify(file.email);
    //const email123 = JSON.stringify(this.usersJSON);
    cy.fixture('users.json').then((user) => {
    
        var dataa = user.email
        cy.get('input[placeholder ="Enter Public Mailinator Inbox"]').type(user.email);
     })
    cy.get('button[id="go-to-public"]').click();
    cy.get('a[class="ng-binding"]').click();
    const link = cy.log(cy.contains('https'));
    const links = JSON.stringify(link);
    cy.writeFile('cypress/fixtures/link.json', links);
}

//https://github.com/cypress-io/cypress/issues/136

it('Confirm login to forum', () => {
    cyConfirm();

})