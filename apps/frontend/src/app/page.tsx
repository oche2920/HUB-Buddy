export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">HUB-Buddy</h1>
      <p className="text-xl text-gray-600">Empowering Decentralized Community Hubs</p>
      <div className="mt-8">
        <a
          href="/communities"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Explore Communities
        </a>
      </div>
    </main>
  );
}
