import { NextResponse } from "next/server";


export function GET() {
  return NextResponse.json({status:200, messange: "api aman"})
}

