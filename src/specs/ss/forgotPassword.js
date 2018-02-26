describe('Forgot password', function () {
    it('I am on /account/forget-password page', function () {
        browser.url('/account/forget-password')
    })

    it('I fill email field', function () {
        browser.setValue('//*[@id="form-email"]', '')
    })

    it('I click reset password', function () {
        browser.click('//*[@id="forget-password-form"]/div[2]/div/button')
        browser.pause(1000)
    })

    it('Should send me reset password email', function () {
        browser.getText('//*[@id="success-send"]/div[1]').should.equal('Tautan Perubahan Terkirim')
    })
})