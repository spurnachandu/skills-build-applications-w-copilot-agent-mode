import { Express } from 'express';
/**
 * Get the API base URL based on the environment
 * - In Codespaces: https://$CODESPACE_NAME-8000.app.github.dev
 * - Locally: http://localhost:8000
 */
export declare const getApiBaseUrl: () => string;
/**
 * Configure CORS and host support for the Express application
 */
export declare const configureServer: (app: Express) => void;
/**
 * Log server configuration information
 */
export declare const logServerInfo: (port: number) => void;
declare const _default: {
    getApiBaseUrl: () => string;
    configureServer: (app: Express) => void;
    logServerInfo: (port: number) => void;
};
export default _default;
//# sourceMappingURL=server.d.ts.map