export type HttpGetClientParams = {
  url: string;
  body?: any;
  headers?: {
    [key: string]: string;
  };
};

export interface HttpGetClient {
  get: (params: HttpGetClientParams) => Promise<any>;
}
