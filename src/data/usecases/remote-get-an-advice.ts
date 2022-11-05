import { HttpGetClient } from './../protocols/http/http-get-client';
import { GetAnAdvice } from "../../domain/usecases/get-an-advice";
import { AdviceModel } from '../../domain/models/advice-model';

export class RemoteGetAnAdvice implements GetAnAdvice {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async get(): Promise<AdviceModel> {
    const httpResponse = await this.httpGetClient.get({
      url: this.url
    })

    return httpResponse
  }
}