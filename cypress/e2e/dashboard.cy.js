import dashboard from '../support/pages/Dashboard'

describe('dashboard', () => {

    beforeEach(() => {
        dashboard.go()
    })

    it('Criar um finança de entrada', () => {
        const finance = {
            desc: 'Venda Óculos oakley flak 2.0',
            amount: '699.50',
            amountFormated: 'R$ 699,50',
            date: '2022-10-26',
            formatDate: '26/10/2022',
            type: 'Entradas'
        }

        dashboard.newTransation()
        dashboard.fillDescription(finance.desc)
        dashboard.fillAmount(finance.amount)
        dashboard.fillDate(finance.date)
        dashboard.submit()
        dashboard.validateTransaction(finance.desc)
        dashboard.validateCard(finance.amountFormated, finance.type)
    });


    it('Criar um finança de saída', () => {
        const finance = {
            desc: 'Compra Óculos oakley flak 2.0',
            amount: '-699.50',
            amountFormated: '-R$ 699,50',
            date: '2022-10-26',
            formatDate: '26/10/2022',
            type: 'Saidas'
        }

        dashboard.newTransation()
        dashboard.fillDescription(finance.desc)
        dashboard.fillAmount(finance.amount)
        dashboard.fillDate(finance.date)
        dashboard.submit()
        dashboard.validateTransaction(finance.desc)
        dashboard.validateTransactionDate(finance.formatDate, finance.desc)
        dashboard.validateCard(finance.amountFormated, finance.type)
    });
})