import axios from "axios";
import {
  HttpGetClient,
  HttpGetClientParams,
} from "./../../../data/protocols/http/http-get-client";

export class AxiosHttpGetClient implements HttpGetClient {
  async get(params: HttpGetClientParams): Promise<any> {
    const httpResponse = await axios.get(params.url)
    return httpResponse.data
  }
}
