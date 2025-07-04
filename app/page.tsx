import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex w-full flex-1 justify-center px-12 pb-16 pt-32 sm:pb-28 sm:pt-48 xl:px-40">
        <Main />
      </main>
      <Footer />
    </>
  );
}
