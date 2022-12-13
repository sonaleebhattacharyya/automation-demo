
const { Builder, Capabilities } = require("selenium-webdriver")

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {addMovie} = require('../functions/addMovie')

beforeEach(async() => {
    await driver.get()
})

afterAll(async() => {
    await driver.quit()
})

describe('movie-list tests', () => {
    test('should be able to add a movie', async () => {
        await addMovie(driver,'Encanto')
        //will prevent any actions for 5 seconds
        await driver.sleep(5000)
    })

})