import { AdviceModel } from './../models/advice-model';

export interface GetAnAdvice {
  get(): Promise<AdviceModel>
}