import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-custom-dark flex flex-col">
      <Header />

      <Main />

      <Footer />
    </main>
  );
}
