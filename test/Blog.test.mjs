
(async () => {

    const chai = require('chai');
    const chaiHttp = require('chai-http');
    const app = require('../index'); 
    
    
    chai.use(chaiHttp);
    const expect = chai.expect;
    
    describe('Blog API Tests', () => {
        let token;
    
        before(async () => {
            const res = await chai.request(app)
                .post('/auth/signin')
                .send({ email: 'test@example.com', password: 'testpassword' });
            token = res.body.token;
        });
    
        it('should create a new blog post', (done) => {
            chai.request(app)
                .post('/blog')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    title: 'Test Blog Title',
                    content: 'Test Blog Content'
                })
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('id');
                    done();
                });
        });
    
        it('should fetch a blog post by its ID', (done) => {
        
            chai.request(app)
                .post('/blog')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    title: 'Test Blog Title',
                    content: 'Test Blog Content'
                })
                .end((err, res) => {
                    const postId = res.body.id;
                    chai.request(app)
                        .get(`/blog/${postId}`)
                        .set('Authorization', `Bearer ${token}`)
                        .end((err, res) => {
                            expect(res).to.have.status(200);
                            expect(res.body).to.have.property('title').to.equal('Test Blog Title');
                            expect(res.body).to.have.property('content').to.equal('Test Blog Content');
                            done();
                        });
                });
        });
    
        it('should update a blog post', (done) => {
            chai.request(app)
                .post('/blog')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    title: 'Test Blog Title',
                    content: 'Test Blog Content'
                })
                .end((err, res) => {
                    const postId = res.body.id;
                    chai.request(app)
                        .put(`/blog/${postId}`)
                        .set('Authorization', `Bearer ${token}`)
                        .send({
                            title: 'Updated Blog Title',
                            content: 'Updated Blog Content'
                        })
                        .end((err, res) => {
                            expect(res).to.have.status(200);
                            expect(res.text).to.equal('Blog updated successfully');
                            done();
                        });
                });
        });
    
        it('should delete a blog post', (done) => {
            chai.request(app)
                .post('/blog')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    title: 'Test Blog Title',
                    content: 'Test Blog Content'
                })
                .end((err, res) => {
                    const postId = res.body.id;
                    chai.request(app)
                        .delete(`/blog/${postId}`)
                        .set('Authorization', `Bearer ${token}`)
                        .end((err, res) => {
                            expect(res).to.have.status(200);
                            expect(res.body).to.have.property('message').to.equal('Blog deleted successfully');
                            done();
                        });
                });
        });
    });
    })();
    