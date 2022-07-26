const request = require('supertest')
const app = require('../../index')
const { deleteOne } = require('../../Model/User')



describe("Test de la route pour la connexion", () => {

    //si les identifiants sont bon alors envoyer un status 200 avec le Token en header
    it("devra un status 200 avec le token", async () => {
        const res = await request(app).post('/user/login').send({ email : 'majid@majid.fr', password : 'majidmajid'})
        expect(res.statusCode).toBe(200);
    })

    //si l'email est mauvais alors envoyer une erreur 400 avec le message d'email erronné
    it("devra renvoyer une erreur si l'email est erroné", async () => {
        const res = await request(app).post('/user/login').send({ email : 'majid@majod.fr', password : 'majidmajid'})
        expect(res.statusCode).toBe(400);
    })

     //si le mot de passe est mauvais alors envoyer une erreur 400 avec le message de mot de passe erronné
    it("devra renvoyer une erreur si le mot de passe est erroné", async () => {
        const res = await request(app).post('/user/login').send({ email : 'majid@majid.fr', password : 'majidmajiddd'})
        expect(res.statusCode).toBe(400);
    })

     //si le mot de passe et l'email est mauvais alors envoyer une erreur 400 avec le message de mot de passe erronné
     it("devra renvoyer une erreur si le mot de passe est erroné", async () => {
        const res = await request(app).post('/user/login').send({ email : 'majid@majccid.fr', password : 'majidmajiddd'})
        expect(res.statusCode).toBe(400);
    })

})


describe("Tester l'inscription", () => {

     //si l'email est deja present dans la base de donnée renvoyer une erreur 400
     it("devra envoyer un status 400 si un compte est deja créer", async () => {
        const res = await request(app).post('/user/register').send({ email : 'majid@majid.fr', password : 'majidmajid', username : 'majidmajid', firstname : 'majid', lastname : "eltayeb"})
        expect(res.statusCode).toBe(400);
    })

    //si l'email n'est pas renseigné renvoyer une erreur 400
    it("devra envoyer un status 400 si l'email est pas dispo", async () => {
        const res = await request(app).post('/user/register').send({ password : 'majidmajid', username : 'majidmajid', firstname : 'majid', lastname : "eltayeb"})
        expect(res.statusCode).toBe(400);
    
    })

    //si le mot de passe n'est pas renseigné renvoyer une erreur 400
    it("devra envoyer un status 400 si le mot de passe est pas dispo", async () => {
        const res = await request(app).post('/user/register').send({email : 'majid@majidddd.fr', username : 'majidmajid', firstname : 'majid', lastname : "eltayeb"})
        expect(res.statusCode).toBe(400);
    })

    //si le username n'est pas renseigné renvoyer une erreur 400
     it("devra envoyer un status 400 si le username est pas dispo", async () => {
        const res = await request(app).post('/user/register').send({email : 'majid@majidddd.fr', password : 'majidmajid', firstname : 'majid', lastname : "eltayeb"})
        expect(res.statusCode).toBe(400);
    })

    //si le fistname n'est pas renseigné renvoyer une erreur 400
    it("devra envoyer un status 400 si lke fistname n'est pas renseigné", async () => {
        const res = await request(app).post('/user/register').send({ email : 'majid@majid.fr', password : 'majidmajid', username : 'majidmajid', lastname : "eltayeb"})
        expect(res.statusCode).toBe(400);
    })

    //si le lastname n'est pas renseigné renvoyer une erreur 400
    it("devra envoyer un status 400 si le lastname n'est pas rensigné", async () => {
        const res = await request(app).post('/user/register').send({ email : 'majid@majid.fr', password : 'majidmajid', username : 'majidmajid', firstname : 'majid'})
        expect(res.statusCode).toBe(400);
    })

     //si l'email n'est pas bon renvoye erreur 400
    it("devra envoyer un status 400 si l'email est erroné", async () => {
        const res = await request(app).post('/user/register').send({ email : 'majid@@majid.fr', password : 'majidmajid', username : 'majidmajid', firstname : 'majid', lastname : "eltayeb"})
        expect(res.statusCode).toBe(400);
    })
    
})
