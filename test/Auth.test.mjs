
(async () => {

    const chai = await import('chai');
    const chaiHttp = require('chai-http');

    const expect = chai.expect;
    chai.use(chaiHttp);


    const app = require('../index');


    it('should register a new user', (done) => {
        chai.request(app)
            .post('/auth/signup')
            .send({
                email: 'test@example.com',
                password: 'testpassword'
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('token');
                done();
            });
    });

    it('should fail to register a user with existing email', (done) => {
        chai.request(app)
            .post('/auth/signup')
            .send({
                email: 'test@example.com', 
                password: 'testpassword'
            })
            .end((err, res) => {
                expect(res).to.have.status(409);
                expect(res.body).to.have.property('error').to.equal('Email already in use');
                done();
            });
    });

    it('should log in an existing user', (done) => {
        chai.request(app)
            .post('/auth/signin')
            .send({
                email: 'test@example.com',
                password: 'testpassword'
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('token');
                done();
            });
    });

    it('should fail to log in with incorrect credentials', (done) => {
        chai.request(app)
            .post('/auth/signin')
            .send({
                email: 'test@example.com',
                password: 'incorrectpassword' 
            })
            .end((err, res) => {
                expect(res).to.have.status(500); 
                expect(res.body).to.have.property('error');
                done();
            });
    });
})();


