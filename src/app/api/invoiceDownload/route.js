
import connectMongoDb from "@/app/libs/mongodb";
import Invoice from "@/app/models/Invoice";
import { connect } from "mongoose"
import { NextResponse } from "next/server";




export async function POST(request){

    const{
            invCount, pfCount} = await request.json()

    await connectMongoDb();
    await Invoice.create({

                invCount, pfCount})

    return NextResponse.json({message: "Invoice downloaded"}, {status: 201})
}