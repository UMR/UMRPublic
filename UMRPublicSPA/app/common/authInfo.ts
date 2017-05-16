export interface AuthInfo {
    access_token: string,
    expires_in: number,
    refresh_token: string,
    token_type: string,
    permissions: string[],
    refresh_expires: number,
    created: number,
    userCredentialId: number
}