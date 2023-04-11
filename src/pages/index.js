// import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <h1>Rent House</h1>
//     </main>
//   )
// }

import Layout from "../components/Layout";
import Grid from "../components/Grid";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  // Get all homes
  const homes = await prisma.home.findMany();
  // Pass the data to the Home page
  return {
    props: {
      homes: JSON.parse(JSON.stringify(homes)),
    },
  };
}

export default function Home({ homes = [] }) {
  return (
    <>
      {/* <div className=" bg-slate-300 ">
        <h1 className="text-xl font-medium text-gray-800">
          Top-rated places to stay
        </h1>
        <p className="text-gray-500">
          Explore some of the best places in the world
        </p>
        <div className="mt-8">
          <Grid homes={homes} />
        </div>
      </div> */}
      <Layout>
        <section className="bg-gray-100 ">
          <div className="mx-auto w-3/4 border border-none py-10">
          <h1 className="text-xl font-medium text-gray-800">
            Top-rated places to stay
          </h1>
          <p className="text-gray-500">
            Explore some of the best places in the world
          </p>
          <div className="container  flex justify-center">
            <Grid homes={homes} />
          </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
