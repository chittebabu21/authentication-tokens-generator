import { OAuth2 } from '../src/index';

const oAuth = new OAuth2("secret", "private-secret");

describe('Return access and refresh tokens', () => {
    it('Should return an object with access and refresh tokens', async () => {
        const token = (await oAuth.generateAccessToken({ data: 'tom@mail.com' }, { expiresIn: '15m', subject: 'tom@mail.com' }));
        expect(token);
    });
});