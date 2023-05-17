import { NextResponse } from "next/server";


export default function middleware(req){

    const {pathname, basePath, locale}  = req.nextUrl;

    console.log(`inside middleware`)
    console.log(`pathname ${pathname}`)
    console.log(`basePath ${basePath}`)
    console.log(`locale ${locale}`)

    NextResponse.next();
}