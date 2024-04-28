import {getPhotoById } from "@/app/lib/image_data";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    console.log(request)
    const photoID =params?.id
    const photos = await getPhotoById(photoID);
   return NextResponse.json(photos);
}