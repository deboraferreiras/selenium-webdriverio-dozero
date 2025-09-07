import { expect, browser, $ } from '@wdio/globals'

describe('My Login application', () => {
    it('should login with invalid credentials', async () => {
        await browser.url(`https://front.serverest.dev/login`)

        await $("[data-testid='email']").setValue('test@automation.com.br')
        await $("[data-testid='senha']").setValue('1234588')
        await $("[data-testid='entrar']").click()

        await expect($('.alert-dismissible')).toBeExisting()
        
    })
})

