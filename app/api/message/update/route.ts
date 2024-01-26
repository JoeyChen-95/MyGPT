import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json()
    const { id, ...data } = body
    if (!data.chatId) {
        const chat = await prisma.chat.create({
            data: {
                title: "New Chat"
            }
        })
        data.chatId = chat.id
    }
    //upsert: if id exists->update current chat, if id does not exist->create new chat
    const message = await prisma.message.upsert({
        create: data,
        update: data,
        where:{
            id
        }
    })

    return NextResponse.json({code: 0,data: {message}})

}