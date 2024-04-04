import { getAllPhotos } from "@/app/lib/image_data";
import { NextResponse } from "next/server";
// Functions to get all photos
export async function GET(){
    
    const photos = await getAllPhotos();
   return NextResponse.json(photos);
}