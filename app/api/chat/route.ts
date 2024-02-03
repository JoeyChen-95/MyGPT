import { sleep } from "@/components/common/util";
import client from "@/lib/openai";
import { Message, MessageRequestBody } from "@/types/chat";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    // Wait for the message from user
    const { messages, model } = (await request.json()) as MessageRequestBody
    // the request only need content and role fields
    // so we extracts these two fields and construct a new list
    const simplifiedMessages = messages.map(({ content, role }) => ({
        content,
        role
    }));
    const encoder = new TextEncoder()
    // Send as data stream back to server side
    const stream = new ReadableStream({
        // Calling Azure OpenAI API
        async start(controller) {
            const events = await client.streamChatCompletions(
                model,
                [{ role: "system", content: "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown." }, ...simplifiedMessages],
                { maxTokens: 1024 }
            );
            for await (const event of events) {
                for (const choice of event.choices) {
                    const delta = choice.delta?.content;
                    if (delta) {
                        controller.enqueue(encoder.encode(delta))
                    }
                }
            }
            controller.close()
        // Make the GPT responses what you inputs -> Only for testing
        
            // const messageText = messages[messages.length - 1].content
            // for (let i = 0; i < messageText.length; i++) {
            //     //interval between appearance of characters 
            //     await sleep(20)
            //     controller.enqueue(encoder.encode(messageText[i]))
            // }
            // controller.close()
        }
    })
    return new Response(stream)
}