import { getAllPhotos } from "@/app/lib/image_data";
import { NextResponse } from "next/server";

export async function GET(){
    
    const photos = await getAllPhotos();
   return NextResponse.json(photos);
}