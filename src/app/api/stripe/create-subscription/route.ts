// import { db } from '@/lib/db';
// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//     const { customerId, priceId } = await req.json();
//     if (!customerId || !priceId) {
//         return new NextResponse("Customer Id or Price Id is missing", { status: 400 });
//     }

//     const subscriptionExists = await db.agency.findFirst({
//         where: { customerId },
//         include: { Subscription: true },
//     });

//     try {
//         if (subscriptionExists?.Subscription?.subscritiptionId && subscriptionExists.Subscription.active) {
//             // Temporarily disable Stripe update logic
//             console.log("Skipping Stripe subscription update...");
            
//             // Instead of making Stripe calls, return a mock response for now
//             return NextResponse.json({
//                 subscriptionId: 'mock-subscription-id',
//                 clientSecret: 'mock-client-secret',
//             });
//         } else {
//             console.log("Skipping Stripe subscription creation...");

//             // Return a mock response for the new subscription creation
//             return NextResponse.json({
//                 subscriptionId: 'mock-new-subscription-id',
//                 clientSecret: 'mock-new-client-secret',
//             });
//         }
//     } catch (error) {
//         console.error('🔴 Error:', error);
//         return new NextResponse('Internal Server Error', {
//             status: 500,
//         });
//     }
// }
