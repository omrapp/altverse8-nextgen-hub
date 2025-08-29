import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const TermsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-jakarta font-bold text-foreground mb-8">
              {t('footer.terms')}
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
                <p>
                  By accessing and using the AltVerse8 Foundation website and services, you accept 
                  and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Foundation Services</h2>
                <p className="mb-4">
                  AltVerse8 Foundation provides educational programs, startup incubation services, 
                  and community building initiatives across Dubai, Kerala, and Sri Lanka.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Educational excellence programs</li>
                  <li>Startup incubation and mentorship</li>
                  <li>Community building and networking events</li>
                  <li>Exclusive social media platform access for members</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">User Responsibilities</h2>
                <p className="mb-4">
                  Users of our services agree to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide accurate and truthful information</li>
                  <li>Respect intellectual property rights</li>
                  <li>Follow community guidelines and code of conduct</li>
                  <li>Use services for lawful purposes only</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
                <p>
                  AltVerse8 Foundation shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages resulting from your use of our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us at 
                  legal@altverse8.foundation
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;