describe('register new user', () => {
    it('should be able to open /register page', () => {
        browser.url('/register')
    })

    it('should be able to fill email field', () => {
        const email = 'ss-' + Math.floor(Date.now() / 1000) + '@gmail.comx'

        browser.setValue('//*[@id="form-email-register"]', email)
    })

    it('should be able to fill password field', () => {
        browser.setValue('//*[@id="form-password-register"]', 'password')
    })

    it('should check term of service', () => {
        browser.click('//*[@id="agree"]')
    })

    it('should be able to submit registration', () => {
        browser.click('//*[@id="register-card"]/button')
    })
})