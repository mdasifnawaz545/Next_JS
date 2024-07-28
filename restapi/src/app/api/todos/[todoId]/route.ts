import { NextResponse } from "next/server";
import { parseArgs } from "util";
type Prop={
    params:{
        todoId:string
    }
}

export async function GET(request:Request,{params: {todoId}}:Prop) {
    let url = "https://jsonplaceholder.typicode.com/todos"
    parseArgs
    // const id = request.url.slice(request.url.lastIndexOf('/'));
    console.log(todoId);
    let response = await fetch(`${url}/${(todoId)}`);
    let responseJson: Todo = await response.json();
    return NextResponse.json(responseJson);

}