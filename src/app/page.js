import React from "react";
import Navbar from "@/app/screens/Navbar";
import Banner from "@/app/screens/Banner";
import CoreBg from "@/app/screens/CoreBg";
import Offering from "@/app/screens/Offering";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 min-h-screen relative">
    <nav>
    <Navbar />
    </nav>
      <div>
      <Banner />
      </div>
      <div>
      <CoreBg />
      </div>
      
      <div>
      <Offering />
      </div>
    
      <div className="absolute -bottom-96 z-50 w-full">
        <Footer />
        </div>
    </main>
  );
}
