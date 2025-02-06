import Image from "next/image"
import Link from "next/link"

const Footer = () =>  {
    return (
        <footer className="flex items-center justify-center gap-3 mb-16 pt-14">
            <div className="flex w-full flex-col gap-14 mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0">
                <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
                    <Link href="/" className="mb-10">
                        <Image src="/logoDevsVertical.png" alt="logo" width={108} height={115}/>
                    </Link>

            <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
                <FooterColumn title={"Empresa"}>
                    <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                        <Link href={"/"}>
                            Empresa
                        </Link>
                        <Link href={"/"}>
                            About
                        </Link>
                        <Link href={"/"}>
                            Proyecto
                        </Link>
                    </ul>
                </FooterColumn>

                <div className='flex flex-col gap-5'>
                <FooterColumn title={"Comunidad"}>
                    <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                        <Link href={"/"}>
                            Apuntes
                        </Link>
                        <Link href={"/"}>
                            Clases Grabadas
                        </Link>
                        <Link href={"/"}>
                            Blogs
                        </Link>
                    </ul>
                </FooterColumn>
                </div>

                <div className='flex flex-col gap-5'>
                <FooterColumn title={"Contacto"}>
                    <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                        <Link href={"/"}>
                            Email: devsproject@gmail.com
                        </Link>
                        <Link href={"/"}>
                            Celular: 123-456-789
                        </Link>
                    </ul>
                </FooterColumn>
                </div>

            </div>

          </div>
          <div className="border bg-gray-20" />
          <p className="regular-14 w-full text-center text-gray-30">2025 Devs Project | Todos los derechos reservados</p>
        </div>
        </footer>
    );
}

type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
}
  
const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
      <div className="flex flex-col gap-5">
        <h4 className="bold-18 whitespace-nowrap">{title}</h4>
        {children}
      </div>
    )
}

export default Footer