describe('Register new user', () => {
    it('I am on /register page', () => {
        browser.url('/register')
    })

    it('I fill email field', () => {
        const email = 'ss-' + timestamp + '@gmail.comx'

        browser.setValue('//*[@id="form-email-register"]', email)
    })

    it('I fill password field', () => {
        browser.setValue('//*[@id="form-password-register"]', 'password')
    })

    it('I check term of service', () => {
        browser.click('//*[@id="agree"]')
    })

    it('I click "Daftar"', () => {
        browser.click('//*[@id="register-card"]/button')
        browser.pause(1000)
    })

    it('I should be redirected to /member/events page', function () {
        browser.getUrl().should.contain('/member/events')
    })
})