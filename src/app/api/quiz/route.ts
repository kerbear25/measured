import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { weight, birthday, email } = await request.json();
  return NextResponse.json(
    {
      message: 'Quiz data submitted successfully!',
      data: { weight, birthday, email },
    },
    { status: 200 }
  );
}
