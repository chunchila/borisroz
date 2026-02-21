import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Categories from "@/components/Categories";
import Models from "@/components/Models";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Gallery />
      <Categories />
      <Models />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
