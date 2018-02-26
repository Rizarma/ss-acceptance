describe('Login member', function () {
    it('I am on /login page', function () {
        browser.url('/login')
    })

    it('I fill email field', function () {
        browser.setValue('//*[@id="form-email"]', '')
    })

    it('I fill password field', function () {
        browser.setValue('//*[@id="form-password"]', '')
    })

    it('I click button "Masuk"', function () {
        browser.click('//*[@id="login-card"]/button')
        browser.pause(1000)
    })

    it('I should be redirected to /member/events page', function () {
        browser.getUrl().should.contain('/member/events')
    })
})