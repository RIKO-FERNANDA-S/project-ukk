import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export const GET = async (req:NextRequest) => {
    const posts = await prisma.siswa.findMany({})
  return NextResponse.json({posts})
}