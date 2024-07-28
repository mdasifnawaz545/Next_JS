import { NextResponse } from "next/server";
import { limiter } from "../api/config/limiter";
import { headers } from "next/headers";

export async function GET(request: Request) {
    const remainning = await limiter.removeTokens(1);
    console.log(remainning);
    if (!remainning) {
        return new NextResponse(null, {
            status: 429,
            statusText: "Too many request",
        })
    }
    return NextResponse.json({ "message": "Salaam" });

}