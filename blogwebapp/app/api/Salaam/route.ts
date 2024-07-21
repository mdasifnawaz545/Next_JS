import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({message:`Salamm...Working with the Next.Js`});
}