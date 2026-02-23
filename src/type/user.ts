export type User = {
    id:string,
    name:string
}

export type ResponseApi<T> = {
    data:T,
    status:number,
    message:string
}