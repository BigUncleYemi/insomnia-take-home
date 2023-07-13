
import Header from "./components/header";
import Hero from "./components/hero";
import Sponsors from "./components/sponsors";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-10 px-5 sm:px-10  xl:px-40 bg-[#111314]">
        <Header />
        <Hero />
        <Sponsors />
        <Footer />
    </main>
  );
}
