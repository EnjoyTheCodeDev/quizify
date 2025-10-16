import Header from "@/components/Header"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full lg:max-w-4xl mx-4 lg:mx-0">
        <Header/>

        <main className="">{children}</main>
      </div>
    </div>
  )
}
