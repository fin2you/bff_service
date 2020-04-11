const { env } = process;
import dotenv from "dotenv";

dotenv.config();

export interface TokenConfig {
  jwksUri: string;
  audience: string;
  issuer: string;
  algorithms: string[]
}

export interface Auth0Configuration {
  domain: string;
  clientId: string;
  clientSecret: string;
}

export interface IDatabaseConfig {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
  max: number;
}

interface IConfiguration {
  server: {
    protocol: string;
    host: string;
    port: number;
  };
  database: IDatabaseConfig;
  auth0Configuration: Auth0Configuration;
  tokenConfig: TokenConfig;
}

const server = {
  protocol: "http",
  host: "0.0.0.0",
  port: 3000,
};

const database = {
  host: env.DATABASE_HOST || "localhost",
  port: env.DATABASE_PORT || 5432,
  database: env.DATABASE_NAME || "postgres",
  user: env.DATABASE_USER || "postgres",
  password: env.DATABASE_PASSWORD || "postgres",
  max: 5,
};

const auth0Configuration = {
  domain: env.AUTH0_DOMAIN,
  clientId: env.AUTH0_CLIENTID,
  clientSecret: env.AUTH0_CLIENTSECRET,
};

const tokenConfig = {
  audience: env.TOKEN_AUDIENCE,
  issuer: env.TOKEN_ISSUER,
  algorithms: [env.TOKEN_ALGORITHM],
  jwksUri: env.TOKEN_JWKSURI,
};

export default {
  server,
  database,
  auth0Configuration,
  tokenConfig,
} as IConfiguration;