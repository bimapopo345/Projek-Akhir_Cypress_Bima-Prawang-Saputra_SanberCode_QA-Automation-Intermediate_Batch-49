export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }
    logout() {
        cy.get('#react-burger-menu-btn').click();  // Mengklik tombol untuk membuka menu
        cy.get('#logout_sidebar_link').click();  // Mengklik link logout setelah menu dibuka
    }

    verifyLogout() {
        cy.get('#login-button').should('be.visible');  // Asumsikan tombol login memiliki id "login-button"
    }
    addProductToCart() {
        cy.get('#add-to-cart-sauce-labs-backpack').click();  // Menambahkan "Sauce Labs Backpack" ke keranjang berdasarkan id
    }

    verifyProductAdded() {
        cy.get('.shopping_cart_link').click();  // Mengklik ikon keranjang berdasarkan class
        cy.contains('Sauce Labs Backpack').should('be.visible');  // Memeriksa apakah "Sauce Labs Backpack" ada di dalam keranjang
    }
}