"use client"
import Image from "next/image";
import Title from "./components/title";
import AccreditationContainer from "./components/AccreditationContainer";

export default function Home() {
  return (
    <main className="container mx-auto p-4 sm:px-12 sm:pt-4">
      <Title />
      <p className="my-4">UI GreenMetric World University Rankings adalah peringkat universitas yang berfokus pada kinerja universitas dalam pengelolaan lingkungan dan keberlanjutan. Peringkat diiterbitkan setiap tahun oleh Universitas Indonesia berdasarkan indikator seperti energi, limbah, transportasi, air, dan pendidikan lingkungan.</p>
      <AccreditationContainer />
    </main>
  );
}