import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-jakarta font-bold text-foreground mb-8">
              {t('footer.privacy')}
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
                <p className="mb-4">
                  AltVerse8 Foundation collects information to provide better services to all our users. 
                  We collect information in the following ways:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Information you give us directly</li>
                  <li>Information we get from your use of our services</li>
                  <li>Information from our educational programs and events</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Information</h2>
                <p className="mb-4">
                  We use the information we collect from all of our services to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process applications for our programs</li>
                  <li>Send you updates about foundation activities</li>
                  <li>Respond to your inquiries and support needs</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
                <p>
                  We do not share personal information with companies, organizations and individuals 
                  outside of AltVerse8 Foundation except in limited circumstances outlined in this policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at 
                  privacy@altverse8.foundation
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

export default PrivacyPage;