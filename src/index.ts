import { OAuth2 } from "./scripts/OAuth2";

interface ITokens {
    accessToken: string;
    refreshToken: string;
}

interface Options {
    accessTokenOptions: {};
    refreshTokenOptions: {};
}

export const generateTokens = async (
    publicKey: string, 
    payload: {},  
    options: Options,
    privateKey?: string, 
): Promise<ITokens> => {
    try {
        const oAuth2 = new OAuth2(publicKey, privateKey);
        const accessToken = await oAuth2.generateAccessToken(payload, options.accessTokenOptions);
        const refreshToken = await oAuth2.generateRefreshToken(payload, options.refreshTokenOptions);

        const tokens: ITokens = {
            accessToken,
            refreshToken
        };

        return tokens;
    } catch (err) {
        throw new Error('Failed to generate tokens.');
    }
}

export const getPayload = async <T>(token: string): Promise<T> => {
    try {
        return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    } catch (err) {
        throw new Error('Failed to get payload.');
    }
}