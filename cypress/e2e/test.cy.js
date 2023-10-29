// File: cypress/integration/newTests.ts

import {LoginPage} from "./pages/login_pages.cy.ts";
import {DashboardPage} from "./pages/dashboard_pages.cy.ts";

let loginPage = new LoginPage();
let dashboardPage = new DashboardPage();
const URL = 'https://www.saucedemo.com/';

it('Test LOGOUT', () => {
    loginPage.login(URL,'standard_user','secret_sauce');
    dashboardPage.logout();  // Asumsikan metode logout() telah ditambahkan di kelas DashboardPage
    dashboardPage.verifyLogout();  // Asumsikan metode verifyLogout() telah ditambahkan di kelas LoginPage
});

it('Test ADD PRODUCT TO CART', () => {
    loginPage.login(URL,'standard_user','secret_sauce');
    dashboardPage.addProductToCart();  // Asumsikan metode addProductToCart() telah ditambahkan di kelas DashboardPage
    dashboardPage.verifyProductAdded();  // Asumsikan metode verifyProductAdded() telah ditambahkan di kelas DashboardPage
});
