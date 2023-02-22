import usersMock from '../../_mocks_/users.json'

before(() => {
    cy.visit('http://localhost:3000')
})

it('Check all items', () => {
    usersMock.forEach(users=>{
        cy.contains(users.name)
    })
})