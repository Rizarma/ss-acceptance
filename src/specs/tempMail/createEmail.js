describe('create new email', () => {
    it('should be on change email page', () => {
        browser.url(process.env.TEMP_MAIL)
        browser.getTitle().should.be.equal('Change e-mail address - Temp Mail')
    })

    it('should be able to type new address', () => {
        const timestamp = Math.floor(Date.now() / 1000)
        const mail_address = 'ss-' + timestamp

        browser.setValue('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[1]/div[1]/input[1]', mail_address)
    })

    it('should be able to save the address', () => {
        browser.click('//*[@id="postbut"]')
    })
})