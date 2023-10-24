export interface EnvironmentModel {
    PORT: number,
    DB_NAME: string,
    DB_USER: string,
    DB_PASS: string, // Should be in an SSM key or similar, not here
    DB_HOST: string
}