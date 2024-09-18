/// <reference types="vite/client" />

import { AxiosRequestConfig } from "axios";

declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>
  }
}

