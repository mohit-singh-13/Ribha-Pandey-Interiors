/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_CONTACT_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
