import * as jwt from 'jsonwebtoken';

export class OAuth2 {
    publicKey!: string;
    privateKey!: string;

    constructor(publicKey: string, privateKey?: string) {
        if (!privateKey) {
            privateKey = publicKey;
        } 

        this.publicKey = publicKey;
        this.privateKey = privateKey;
    }

    async generateAccessToken(payload: {}, options: {}): Promise<string> {
        try {
            const token = await new Promise<string>((resolve, reject) => {
                jwt.sign(payload, this.privateKey, options, (err, token) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(token as string);
                    }
                });
            });

            return token;
        } catch (err) {
            throw new Error("Failed to generate access token.");
        }
    }

    async generateRefreshToken(payload: {}, options: {}): Promise<string> {
        try {
            const token = await new Promise<string>((resolve, reject) => {
                jwt.sign(payload, this.privateKey, options, (err, token) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(token as string);
                    }
                });
            });

            return token;
        } catch (err) {
            throw new Error("Failed to generate refresh token.");
        }
    }

    async validateToken(token: string): Promise<boolean> {
        try {
            const payload = await new Promise((resolve, reject) => {
                jwt.verify(token, this.publicKey, (err, payload) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(payload);
                    }
                });
            });

            return payload ? true : false;
        } catch (err) {
            throw new Error('Failed to validate token.');
        }
    }

    parseToken(token: string): {} | null {
        return jwt.decode(token);
    }
}