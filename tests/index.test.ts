import * as oAuth from '../src/index';

describe('Return access and refresh tokens', () => {
    it('Should return an object with access and refresh tokens', async () => {
        const obj = (await oAuth.generateTokens('secret', { data: 13 }, { 
            accessTokenOptions: { expiresIn: '15m', subject: 'tim@email.com' }, 
            refreshTokenOptions: { expiresIn: '1h'}
        }));
        expect(obj).toHaveProperty('refreshToken');
    });
});