import Head from 'next/head';
import Image from "next/image";
import Presentation from "./components/Presentation";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Head>
        <title>Hugo Martineu</title>
        <link rel="icon" type="image/jpg" href="/images/LogoSteam.jpg" />
      </Head>
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Presentation />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
