import axios from "axios";
import { Taxios } from "@simplesmiler/taxios";
import { Api } from "@/src/types/Api";

export const client = new Taxios<Api>(
  axios.create({
    headers: {
      Accept: "*/*",
    },
  })
);
