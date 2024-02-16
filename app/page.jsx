import AuthForm from "./components/AuthFrom"
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto p-6 sm:p-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          Welcome to Watch List
        </h1>
        <p className="text-lg md:text-xl text-white mb-6">
          Your personal space to curate and manage a whishlist of your favourite watches.
          Sign in to create, view, edit and delete watches from your whishlist.
        </p>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <AuthForm/>
        </div>
      </div>
    </div>
  );
}
