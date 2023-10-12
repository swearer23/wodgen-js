import { NextResponse } from "next/server";

export const SADD_ERROR = "SADD_ERROR";

export default function Error500(err: string) {
  return new NextResponse(err, {
    status: 500,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });
}