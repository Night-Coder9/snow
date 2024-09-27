// import { NextRequest, NextResponse } from 'next/server'
// import { headers } from 'next/headers'
// import Stripe from 'stripe'
// import { stripe } from '@/lib/stripe'
// import { SubscriptionCreated } from '@/lib/stripe/stripe-action'

// const stripeWebhookEvents = new Set([
//     'product.created',
//     'product.updated',
//     'price.created',
//     'price.updated',
//     'checkout.session.completed',
//     'customer.subscription.created',
//     'customer.subscription.updated',
//     'customer.subscription.deleted',
//   ])


//   export async function POST(req: Request) {
//     let stripeEvent: Stripe.Event
//     const body = await req.text()
//     const sig = headers().get('Stripe-Signature')
    
//   const webhookSecret =  process.env.STRIPE_WEBHOOK_SECRET_LIVE ?? process.env.STRIPE_WEBHOOK_SECRET

//     try {
//         if (!sig || !webhookSecret) {
//           console.log(
//             '🔴 Error Stripe webhook secret or the signature does not exist.'
//           )
//           return
//         }
//         stripeEvent = stripe.webhooks.constructEvent(body, sig, webhookSecret)
//       } catch (error: any) {
//         console.log(`🔴 Error ${error.message}`)
//         return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 })
//       }


//       try {
//         if(stripeWebhookEvents.has(stripeEvent.type)){
//             const subscription = stripeEvent.data.object as Stripe.Subscription
//         }

//         const subscription = stripeEvent.data.object as Stripe.Subscription
//       if (
//         !subscription.metadata.connectAccountPayments &&
//         !subscription.metadata.connectAccountSubscriptions
//       ) {
//         switch (stripeEvent.type) {
//             case 'customer.subscription.created':
//             case 'customer.subscription.updated': {
//                 if (subscription.status === 'active') {
//                     await SubscriptionCreated(
//                       subscription,
//                       subscription.customer as string
//                     )
//                     console.log('CREATED FROM WEBHOOK 💳', subscription)
//                   } else {
//                     console.log(
//                       'SKIPPED AT CREATED FROM WEBHOOK 💳 because subscription status is not active',
//                       subscription
//                     )
//                     break
//                   }
      
//             }
//             default:
//             console.log('👉🏻 Unhandled relevant event!', stripeEvent.type)
//       } 
//       } else {
//         console.log(
//           'SKIPPED FROM WEBHOOK 💳 because subscription was from a connected account not for the application',
//           subscription
//         )
//       }
//      } catch (error) {
//         console.log(error)
//     return new NextResponse('🔴 Webhook Error', { status: 400 }) 
//       }
  
//       return NextResponse.json(
//         {
//           webhookActionReceived: true,
//         },
//         {
//           status: 200,
//         }
//       )
//     }


import { NextResponse } from 'next/server';

// Export the POST function (or other HTTP methods as needed)
export async function POST(req: Request) {
  // Mock response or your API logic
  return NextResponse.json({
    message: 'Route is working!',
  });
}