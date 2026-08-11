import { NextResponse } from "next/server";
import { demoReport } from "@/lib/demo-data";
import { parseGithubUrl,getRepository } from "@/lib/github";
import { buildRepositoryContext } from "@/lib/repository-context";
import { analyzeWithOpenAI } from "@/lib/openai";
export async function POST(req:Request){try{const {url,demo}=await req.json();if(demo)return NextResponse.json({report:demoReport,repository:{owner:"demo",name:"repo-doctor",url:"https://github.com/demo/repo-doctor",language:"TypeScript",stars:128,forks:18}});const parsed=parseGithubUrl(url);const repo=await getRepository(parsed.owner,parsed.name);const context=await buildRepositoryContext(parsed.owner,parsed.name);if(!context)throw new Error("Could not read enough repository files to analyze.");const report=await analyzeWithOpenAI(context);return NextResponse.json({report,repository:{owner:repo.owner,name:repo.name,url:parsed.url,language:repo.language,stars:repo.stars,forks:repo.forks,description:repo.description}})}catch(error){return NextResponse.json({error:error instanceof Error?error.message:"Analysis failed."},{status:500})}}
