declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PORT: string;
    DATABASE_URL: string;
    HOST: string;
    USER: string;
    PASSWORD: string;
  }
}
