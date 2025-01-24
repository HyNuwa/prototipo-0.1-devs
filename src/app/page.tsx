import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import Image from "next/image";

export default async function Home({searchParams}: {
  searchParams: { query?: string };
}) {

  const query = (await searchParams).query ?? '';
  return (
    <>
      <section className="blue_container relative">

        {/* Left Doodle */}
        <div className="flex z-20 flex-1 flex-col ">
          <Image
          src="/study-hands.png"
          alt="Left decorative doodle"
          width={250}
          height={218}
          className="absolute left-8 top-1/2 hidden -translate-y-1/2 transform 2xl:block md:w-[250px]"
          />
        </div>

        {/* Right Doodle */}
        <div className="flex z-20 flex-1 flex-col">
          <Image
          src="/idea-hand.png"
          alt="Right decorative doodle"
          width={200}
          height={200}
          className="absolute right-8 top-1/2 hidden -translate-y-1/2 transform 2xl:block md:w-[200px]"
          />
        </div>


        <h1 className="heading">Preparate en <br/> Devs Projects                                
        </h1>
        <p className="sub-heading !max-w-3xl ">
          Prepara tus clases con los mejores apuntes, clases grabadas y ejercicios resueltos gratis!
        </p>
        <SearchForm query={query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ?  `Resultados para "${query}"` : 'Todos los resultados'}
        </p>
        <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          <StartupCard />
        </ul>

      </section>
    </>
  );
}
