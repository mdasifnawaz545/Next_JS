import { NextResponse } from "next/server";

export async function GET(request: Request) {
    let url = "https://jsonplaceholder.typicode.com/todos"
    const id = request.url.slice(request.url.lastIndexOf('/'));
    console.log(id);
    let response = await fetch(`${url}/${id}`);
    let responseJson: Todo = await response.json();
    return NextResponse.json(responseJson);

}