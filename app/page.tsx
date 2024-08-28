"use client"

import Image from "next/image";
import Title from "./components/title";
import SearchBar from "./components/searchbar";
import Table from "./components/table";
import ProgramStudiTable from "./components/table";
import Filter from "./components/filter";
import AccordionFilter from "./components/filter";

export default function Home() {
  return (
    <main className="container mx-auto px-12 pt-4">
      <Title />
      <p className="my-4">UI GreenMetric World University Rankings adalah peringkat universitas yang berfokus pada kinerja universitas dalam pengelolaan lingkungan dan keberlanjutan. Peringkat diiterbitkan setiap tahun oleh Universitas Indonesia berdasarkan indikator seperti energi, limbah, transportasi, air, dan pendidikan lingkungan.</p>
      <SearchBar />
      <div className="grid grid-cols-12 gap-4 py-4 ">
        <div className="order-last md:order-first col-span-full md:col-span-9"><ProgramStudiTable /></div>
        <div className="col-span-full md:col-span-3">
          <AccordionFilter />
        </div>
      </div>

    </main>
  );
}
