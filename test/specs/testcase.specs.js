describe('Test Cases', () => {
    it('Test Case 1 - User success login', async () => {
        await browser.url('https://www.saucedemo.com/');

        const username = await browser.$('#user-name');
        const password = await browser.$('#password');
        const loginButton = await browser.$('#login-button');
        
        await browser.pause(1000);
        await username.setValue('standard_user');
        await browser.pause(1000);
        await password.setValue('secret_sauce');
        await browser.pause(1000);
        await loginButton.click();

        await browser.pause(2000);

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it('Test Case 2 - Validate user berada di dashboard setelah login', async () => {
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual('Swag Labs');
    });

    it('Test Case 3 - Add item to cart', async () => {
        const addItemButton = await $('.btn_primary');
        await addItemButton.click();
    
        await browser.pause(2000);
    });
    
    it('Test Case 4 - Validate item sukses ditambahkan ke cart', async () => {

        await browser.pause(2000);
    
        const cartBadge = await $('.shopping_cart_badge');
        const cartItemCount = await cartBadge.getText();
        expect(cartItemCount).toEqual('1');
    
        const cartLink = await $('.shopping_cart_link');
        await cartLink.click();
    
        const isItemInCart = await $('.cart_item');
        expect(await isItemInCart.isDisplayed()).toBeTruthy();
    });
    
    
});
