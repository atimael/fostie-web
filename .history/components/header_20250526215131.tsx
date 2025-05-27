export default function Header() {
  return (
    <header className="justify-between flex items-center dark:text-white py-6 px-6">
      <div>
        <h1 className="text-4xl font-bold text-center">Fostie</h1>
      </div>

      <div className="flex items-center gap-4">
        <div>Contact</div>

        <div>Mac App Store</div>
      </div>
    </header>
  );
}
