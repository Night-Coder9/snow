// 'use server'

// import Stripe from 'stripe'
// import { db } from '../db'
// import { stripe } from '.'

// export const SubscriptionCreated = async (
//     subscription: Stripe.Subscription,
//     customerId: string
// ) => {
//     try {
//         const agency = await db.agency.findFirst({
//             where: {
//                 customerId
//             },
//             include: {
//                 SubAccount: true
//             }
            
//         })

//         if(!agency) {
//             throw new Error("Could Not find an agency to upsert the subscription")
//         }

//         const data = {
//             active: subscription.status === 'active',
//             agencyId: agency.id,
//             customerId,
//             currentPeriodEndDate: new Date(subscription.current_period_end * 1000),
//             //@ts-ignore
//             priceId: subscription.plan.id,
//             subscritiptionId: subscription.id,
//             //@ts-ignore
//             plan: subscription.plan.id,
//           }

//           const response = await db.subscription.upsert({
//             where: {
//                 agencyId: agency.id
//             },
//             create: data,
//             update: data,
//           })
//           console.log(`🟢 Created Subscription for ${subscription.id}`)
//     } catch (error) {
//         console.log('🔴 Error from Create action', error)
//     }
// }

// export const getConnectAccountProducts = async (stripeAccount: string) => {
//         const Products = await stripe.products.list({
//             limit: 50,
//             expand:['data.default_price']
//         }, {
//             stripeAccount,
//         })

//         return Products.data
// }

import { NextResponse } from 'next/server';

// Export the POST function (or other HTTP methods as needed)
export async function POST(req: Request) {
  // Mock response or your API logic
  return NextResponse.json({
    message: 'Route is working!',
  });
}