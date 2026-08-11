import { NextResponse } from "next/server";
import { reportSchema } from "@/lib/analysis-schema";
export async function POST(req:Request){try{const {report}=await req.json();const parsed=reportSchema.parse(report);return NextResponse.json({issues:parsed.suggestedIssues})}catch{return NextResponse.json({error:"Invalid report."},{status:400})}}
