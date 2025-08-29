import Header from "@/components/Header";
import SocialApp from "@/components/SocialApp";
import Footer from "@/components/Footer";

const SocialAppPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <SocialApp />
      </main>
      <Footer />
    </div>
  );
};

export default SocialAppPage;