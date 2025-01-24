import {EyeIcon} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
//import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function StartupCard() {
  return (
    <li className="startup-card group">
        <div className="flex-between">
            <p className="startup_card_date">
                28/30/30
            </p>
            <div className='flex gap-1.5'>
                <EyeIcon className='size-6 text-primary'/>
                <span className='text-16-medium'>views</span>
            </div>
        </div>
        <div className='flex-between mt-5 gap-5'>
            <div className='flex-1'>
                <Link href={`/`}>
                    <p className='text-16-medium line-clamp-1'>name</p>
                </Link>
                <Link href={`/`}>
                    <h3 className='text-26-semibold line-clamp-1'>
                        titulo
                    </h3>
                </Link>
            </div>
            <Link href={`/`}>
                <Image src="https://placehold.co/48x48" alt="placeholder" width={48} height={48} className='rounded-full'/>
            </Link>
        </div>
        
        <Link href={`/`}>
            <p className='startup_card_desc'>
                decripcion
            </p>
            <img src={`/placehold.co/50x50`} alt='placeholder' className='startup-card_img'/>
        </Link>
        <div className='flex-between gap-3 mt-5'>
            <Link href={`/`}>
                <p className='text-16-medium'>categoria</p>
            </Link>
            <Button className='startup-card_btn' asChild>
                <Link href={`/`}>
                    Details
                </Link>
            </Button>
        </div>
    </li>
  )
}

export default StartupCard