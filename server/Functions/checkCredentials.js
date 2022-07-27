
module.exports = class checkCredentials
{
    static async register(input)
    {
        if(!input.email || !input.password || !input.username || !input.firstname || !input.lastname) return false
    }

    static async login(input)
    {
        if(!input.email || !input.password) return false
    }
}