import Chance from 'chance';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
const chance = new Chance();


const user = {
    email: chance.word() + "@mailinator.com",
    username: chance.word({length: 7}),
    password: "Password123"
}


beforeEach(() => {
    cy.visit('https://conifer.rhizome.org/_register');
})

function cyLogin(){
    cy.writeFile('cypress/fixtures/users.json', user);
    cy.get('input[name=username]').type(user.username.trim());
    cy.get('input[name=email]').type(user.email);
    cy.get('input[name=password]').type(user.password);
    cy.get('input[name=confirmpassword]').type(user.password);
    cy.get('form[class] > button[type=submit]').click();
}



it('create login to forum', () => {
    cyLogin();

})