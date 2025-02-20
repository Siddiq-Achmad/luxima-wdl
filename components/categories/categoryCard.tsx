"use client"
import { Button, Card, CardFooter, CardHeader, Image } from '@heroui/react'
import { Logo, RoundArrowOutward } from '../icons';
import Link from 'next/link';


interface CategoryCardProps {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export default function CategoryCard({ name, slug, description, image }: CategoryCardProps) {
  return (
    <>
    
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-3xl">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <Link href={`/${slug}`} >
          <p className="text-tiny text-white/60 font-light">{slug}</p>
          <h4 className="text-white/90 font-medium uppercase text-xl">{name}</h4>
          </Link>
        </CardHeader>
        <Image
          removeWrapper
          alt={name}
          className="z-0 w-full h-full object-cover"
          src={image}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          
          <div className="flex flex-grow gap-2 items-center">
            <Logo />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">{description}</p>
              
            </div>
          </div>
          <Link href={`/${slug}`} >
          <Button radius="full" isIconOnly endContent={<RoundArrowOutward />} />

          </Link>
        </CardFooter>
      </Card>
    </>
        
    
  )
}
