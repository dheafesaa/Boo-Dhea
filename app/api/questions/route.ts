import { NextResponse } from "next/server";
import { getQuestions } from "../../../src/services/questionsService";

export async function GET() {
  const data = getQuestions();
  return NextResponse.json(data);
}
