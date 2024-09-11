import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(){

    return(
       <>
       <nav>
            <div>
                <Image 
                src="/images/2G2M_Logo Principal@4x.png" 
                width="30"
                height="30"
                alt="2G2M"
                />
            </div>
        </nav>
        <ul>
                <li>
                    <Link href="/">
                        Caixa
                    </Link>

                </li>
                </ul>
               <ul>
                <li>
                    <Link href="/">
                        Fechamento
                    </Link>

                </li>
            </ul>
            </>
    )
}