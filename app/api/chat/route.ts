import { sleep } from "@/components/common/util";
import { MessageRequestBody } from "@/types/chat";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    // Wait for the message from user
    const { messages } = (await request.json()) as MessageRequestBody
    const encoder = new TextEncoder()
    // Send as data stream back to server side
    const stream = new ReadableStream({
        async start(controller) {
            const messageText = messages[messages.length - 1].content
            for (let i = 0; i < messageText.length; i++) {
                //interval between appearance of characters 
                await sleep(20)
                controller.enqueue(encoder.encode(messageText[i]))
            }
            controller.close()
        }
    })
    return new Response(stream)
}