interface ITokens {
    accessToken: string;
    refreshToken: string;
}
interface Options {
    accessTokenOptions: {};
    refreshTokenOptions: {};
}
export declare const generateTokens: (publicKey: string, payload: {}, options: Options, privateKey?: string) => Promise<ITokens>;
export declare const getPayload: <T>(token: string) => Promise<T>;
export {};
