import { RemoteGetAnAdvice } from "../../../data/usecases/remote-get-an-advice";
import { HttpGetClient } from "../../../data/protocols/http/http-get-client";
import { AxiosHttpGetClient } from "../../../infra/protocols/http/axios-get-client";
import { useState } from "react";
import { AdviceModel } from "../../../domain/models/advice-model";
import {
  Button,
  ContainerViewPort,
  Container,
  ParagraphPresentation,
} from "./style";

export function Home() {
  const [advice, setAdvice] = useState<AdviceModel>();

  const url = "https://api.adviceslip.com/advice";
  const axiosHttpClient = new AxiosHttpGetClient();
  const remoteAdvice = new RemoteGetAnAdvice(url, axiosHttpClient);

  async function handleClick() {
    const advice = await remoteAdvice.get();
    setAdvice(advice);
  }

  return (
    <main className={ContainerViewPort()}>
      <div className={Container()}>
        <p className={ParagraphPresentation()}>
          {advice?.slip.advice || "Your advice will be show here"}
        </p>
        <button className={Button()} onClick={handleClick}>
          Get An Advice
        </button>
      </div>
    </main>
  );
}
