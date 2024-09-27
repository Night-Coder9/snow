// import Stripe from 'stripe'

// export const stripe = new Stripe (process.env.STRIPE_SECRET_KEY ?? '' , {
//     apiVersion: '2023-10-16',
//   appInfo: {
//     name: 'Snow App',
//     version: '0.1.0',
//   },
// // 

import { NextResponse } from 'next/server';

// Export the POST function (or other HTTP methods as needed)
export async function POST(req: Request) {
  // Mock response or your API logic
  return NextResponse.json({
    message: 'Route is working!',
  });
}