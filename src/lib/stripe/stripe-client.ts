// import {loadStripe , Stripe} from '@stripe/stripe-js'


// let stripePromise: Promise<Stripe | null>

// export const getStripe = (connectedAccountId?: string) => {
//     if(!stripePromise) {
//         stripePromise = loadStripe(
//             process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '',
//             {stripeAccount: connectedAccountId}
//         )
//     }

//     return stripePromise
// }

import { NextResponse } from 'next/server';

// Export the POST function (or other HTTP methods as needed)
export async function POST(req: Request) {
  // Mock response or your API logic
  return NextResponse.json({
    message: 'Route is working!',
  });
}