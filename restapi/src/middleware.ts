import { log } from "console";
import { NextRequest,NextMiddleware,NextResponse } from "next/server";
export async function middleware(request:Request) {

    let allowedFormats=process.env.NODE_ENV === 'production'?['https://www.SALAAM.com','https://SALAAM.in']:['https://www.google.com']

    const origin=request.headers.get('origin');

    if(origin && !allowedFormats.includes(origin))
    {
        return new NextResponse(null,{
            status:209,
            statusText:"Bad Request",
            headers:{
                'content-type':'application/json'
            }
        })
    }


    console.log("Middleware");
    console.log(request.method);
    console.log(request.url);
    console.log(origin);
    
    return NextResponse.next();
}

export const config= {
    matcher:'/api/:path*',
}