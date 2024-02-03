import { OpenAIClient, AzureKeyCredential } from "@azure/openai";

const client = new OpenAIClient(
  "https://mygpt1234.openai.azure.com/",
  new AzureKeyCredential("dea2c82f52034550be32c13ba3590a4c")
);

export default client