import { NextResponse } from "next/server";

export function POST(request: Request) {
    const { searchParams } = new URL(request.url);
    const requestObject=Object.fromEntries(searchParams.entries());
    return NextResponse.json({ message: `Post Request Recieved at SHUKRAN Route`,requestObject })
}