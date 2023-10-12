import Image from "next/image";

// Home page (index)
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to{" "}
            <a className="text-blue-600" href="/">
              Sports Agent!
            </a>
          </h1>

          <p className="mt-3 text-2xl">
            Get started by{" "}
            <a className="text-blue-600" href="/register">
              Registering
            </a>{" "}
            or{" "}
            <a className="text-blue-600" href="/login">
              Logging In
            </a>
          </p>
        </main>
      </div>
    </>
  );
}
