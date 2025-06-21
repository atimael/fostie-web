import Footer from "@/components/footer";
import Header from "@/components/header";

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex w-full flex-1 justify-center px-12 pb-16 pt-32 sm:pb-28 sm:pt-48 xl:px-40">
        {children}
      </main>
      <Footer className="support-page" />
    </>
  );
}
