import Image from "next/image";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { pricingCards } from "@/lib/constants";
import { Check } from "lucide-react";
export default function Home() {
  return (
    <>
      <section className="h-full w-full relative pt-36 flex items-center justify-center flex-col">
            {/* {Grid from bg.ibelick.com} */}
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"/>

            <p className="text-center mt-44 text-2xl">Run Your Agency In One Place</p>
            <div className="bg-gradient-to-r from-primary to-secondary-foreground
             text-transparent bg-clip-text relative">
              <h1 className="text-7xl font-bold text-center md:text-[300px]">SNOW</h1>
            </div>
{/* ----------------------------------------------------------------------------------------------- */}
          <div className="flex justify-center items-center relative md:mt-[-70px]">
            <Image
            src={'/assets/preview.png'}
            alt="banner Image" 
            height={1000} 
            width={1000} 
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
            />  
            <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10">

            </div>
          </div>
      </section>
{/* -----------------------------------------------------------------------------------------------------*/}
            <section className="flex justify-center items-center flex-col gap-4 md:mt-72">
                    <h2 className="text-4xl text-center">
                        Always Choose Right Way !
                    </h2>
                    <p className="text-muted-foreground text-center">
                    Our CRM platform brings you closer to your customers than ever before.
                    
                     <br /> Experience seamless management of contacts, sales, and services with a click!"

                    </p>
                    <div className="flex justify-center gap-4 flex-wrap mt-6">
                      {pricingCards.map((card) => (

                        <Card key={card.title} className={clsx('w-[300px] flex flex-col justify-between', {"border-2 border-primary":card.title==="Unlimited Saas"})}>

                        <CardHeader>
                        <CardTitle className={clsx('' , {"text-muted-foreground":card.title!=="Unlimited Saas"})}>
                          {card.title}
                        </CardTitle>
                        <CardDescription>{card.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <span className="text-4xl font-bold">
                                  {card.price}
                          </span>
                          <span className="text-muted-foreground">/m</span>
                        </CardContent>
                        <CardFooter className="flex flex-col items-start gap-4">
                            <div>
                              {card.features.map((feature) => (
                                    <div key= {feature} className="flex gap-2 items-center text-muted-foreground">
                                      <Check/>
                                      <p>{feature}</p>
                                    </div>
                              ))}
                            </div>

                                <Link href={`/agency?plan=${card.priceId}`} className={clsx('w-full text-center bg-primary p-2 rounded-md', {'!bg-muted-foreground':card.title!=="Unlimited Saas"})}>
                                  Get Started !
                                </Link>

                        </CardFooter>

                      </Card>
                      ))}
                    </div>
            </section>
          {/* ------------------------------------------------------------------------ */}
            <section className="b-0 flex flex-row bg-transparent border w-full h-24 mt-5">
                  <div className="flex text-white flex-row items-center justify-center">
                      <ul className="flex items-center flex-row gap-5 pl-8">
                        <li>Contact Us</li>
                        <li>Affiliate Program</li>
                        <li>Terms & Condtions</li>
                      </ul>
                      <Button
                      variant="outline"
                      size="sm"
                      className="ml-6 border-blue-600 text-blue-400 hover:bg-transparent hover:border-blue-300"
                      >
                        Available Soon!
                      </Button>
                  </div>
            </section>
      </>
  );
}
