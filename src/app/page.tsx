
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-cols-1 grid-rows-[1fr_auto] gap-4 p-4">
      <NavBar />
      <main className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Welcome to Wix App</h1>
        <p className="text-lg text-gray-600">
          This is a simple Next.js app with Tailwind CSS.
        </p>
      </main>
      <Footer />
    </div>
  );
}

