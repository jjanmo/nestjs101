import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  describe('/ (root)', () => {
    it('GET 200', () => {
      return request(app.getHttpServer())
        .get('/')
        .expect(200)
        .expect('Hello World 🚀');
    });
  });

  describe('/movies', () => {
    it('GET 200', () => {
      return request(app.getHttpServer()) //
        .get('/movies')
        .expect(200)
        .expect([]);
    });

    it('POST 200', () => {
      return request(app.getHttpServer()) //
        .post('/movies')
        .send({
          title: 'Test',
          year: 2021,
          genres: ['thrill', 'action'],
        })
        .expect(201);
    });

    it('POST 400', () => {
      return request(app.getHttpServer()) //
        .post('/movies')
        .send({
          title: 'Test',
          year: 2021,
          genres: ['thrill', 'action'],
          type: 'Movie',
        })
        .expect(400);
    });

    it('DELETE 404', () => {
      return request(app.getHttpServer()) //
        .delete('/movies')
        .expect(404);
    });
  });
  describe('/movies/:id', () => {
    it.todo('GET 200');
    it.todo('GET 404');
    it.todo('PETCH 200');
    it.todo('DELETE 200');
    it.todo('DELETE 404');
  });
});
