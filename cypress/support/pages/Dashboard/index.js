class DashboardPage {

    go() {
        cy.visit('/')
    }

    newTransation() {
        cy.contains('a', '+ Nova transação')
            .click()
    }


    fillDescription(desc) {
        cy.get('input[name="description"]')
            .type(desc)
    }

    fillAmount(val) {
        cy.get('input[name="amount"]')
            .type(val)
    }

    fillDate(dt) {
        cy.get('input[type="date"]')
            .type(dt)
    }

    submit() {
        cy.contains('button', 'Salvar').click()
    }

    validateTransaction(desc) {
        cy.get('tr')
            .find('td')
            .siblings()
            .contains(desc)
    }

    validateTransactionDate(dt, desc) {
        cy.get('td.data-table__description')
            .contains(desc)
            .parent()
            .find('td.data-table__date')
            .contains(dt)
    }

    validateCard(val, type) {
        cy.get('span')
            .contains(type)
            .parents('.card')
            .find('p')
            .contains(val)

    }


}

export default new DashboardPage()