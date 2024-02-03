This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Create .env.development file

Create a file named `.env.development` to store your Azure OpenAI Service endpoint, api key and deployment named:

```
AZURE_ENDPOINT=YOUR_ENDPOINT
AZURE_API_KEY=YOUR_API_KEY
AZURE_DEPLOYMENT_NAME_1=YOUR_DEPLOYMENT_NAME_FOR_GPT3.5
AZURE_DEPLOYMENT_NAME_2=YOUR_DEPLOYMENT_NAME_FOR_GPT4.0
```

You need to register [Azure OpenAI Service](https://azure.microsoft.com/en-ca/products/ai-services/openai-service) and fill the following information in the file to use the functions.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
