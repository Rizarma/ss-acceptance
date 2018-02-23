describe('create new email', () => {
    it('should be on change email page', () => {
        browser.url(process.env.TEMP_MAIL)
        browser.getTitle().should.be.equal('Change e-mail address - Temp Mail')
    })
})