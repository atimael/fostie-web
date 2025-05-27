export default function Header() {
  return (
    <header className="justify-between flex items-center  py-6 px-6">
      <div>
        {/* <Image src="/logo.png" alt="Fostie" width={100} height={100} /> */}
        <h1 className="text-4xl font-bold text-center">Fostie</h1>
      </div>

      <div className="flex items-center gap-4">
        <div>Mac App Store</div>
      </div>
    </header>
  );
}
