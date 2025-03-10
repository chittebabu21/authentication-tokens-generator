export declare class OAuth2 {
    publicKey: string;
    privateKey: string;
    constructor(publicKey: string, privateKey?: string);
    generateAccessToken(payload: {}, options: {}): Promise<string>;
    generateRefreshToken(payload: {}, options: {}): Promise<string>;
    validateToken(token: string): Promise<boolean>;
    getPayload<T>(token: string): Promise<T>;
    parseToken(token: string): {} | null;
}
