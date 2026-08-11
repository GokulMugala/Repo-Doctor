import { NextResponse } from "next/server";
import { parseGithubUrl,createIssue } from "@/lib/github";
export async function POST(req:Request){try{const {repository,title,body,labels}=await req.json();const parsed=parseGithubUrl(repository);const issue=await createIssue(parsed.owner,parsed.name,title,body,labels||[]);return NextResponse.json({url:issue.html_url})}catch(e){return NextResponse.json({error:e instanceof Error?e.message:"Could not create issue."},{status:500})}}
