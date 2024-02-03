import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json()
    const { id, ...data } = body

    //upsert: if id exists->update current chat, if id does not exist->create new chat
    await prisma.chat.update({
        data,
        where: {
            id
        }
    })

    return NextResponse.json({ code: 0 })

}