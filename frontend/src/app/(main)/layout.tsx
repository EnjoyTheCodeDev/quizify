import Header from "@/components/Header"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-gradient min-h-screen flex justify-center">
      <div className="max-w-3xl w-full lg:max-w-4xl mx-4 lg:mx-0 mt-10 md:mt-20">
        <Header />

        <main className="bg-white rounded-sm p-2 py-3 md:px-6 md:py-6 shadow">
          {children}
        </main>
      </div>
    </div>
  )
}
