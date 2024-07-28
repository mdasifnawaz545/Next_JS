import exp from "constants";
import { Readex_Pro } from "next/font/google";
import { NextResponse } from "next/server";

const DATA_SOURSE_URL = "https://jsonplaceholder.typicode.com/todos"

export async function GET(request:Request) {

    let origin=request.headers.get('origin')
    let todos = await fetch(DATA_SOURSE_URL);
    let todosJson: Todo[] = await todos.json();
    return new NextResponse(JSON.stringify(todosJson),{
        headers:{
            'Access-Control-Allow-origin':origin || "*",
            'Content-type':'application/json'
        }
    })
}

const API_KEY: string = process.env.API_KEY as string

export async function POST(request: Request) {
    let { userId, title }: Partial<Todo> = await request.json(); // {Body} Using this way in order to get the info in nextjs 13 onwards.
    if (!userId || !title) return NextResponse.json({ "message": "Id is required" })
    const response = await fetch(DATA_SOURSE_URL, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        },
        body: JSON.stringify({
            userId, title, completed: false
        })
    });
    // let todosJson: Todo[] = await todos.json();
    // todosJson = todosJson.filter((todo) => (todo.id !== id));
    let jso = await response.json();
    return NextResponse.json(jso)

}

export async function PUT(request: Request) {
    const { userId, id, title, completed }: Todo = await request.json();
    const response = await fetch(`${DATA_SOURSE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        },
        body: JSON.stringify({
            userId, id, title, completed
        })
    });
    const responseJson:Todo=await response.json();
    return NextResponse.json(responseJson)

}