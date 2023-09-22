import './globals.css'
import { GiWeightLiftingUp } from 'react-icons/gi'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet"></link>
      </head>
      <body className="flex justify-center">
        <div className='flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen min-full-width'>
          <header className='flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2'>
            <GiWeightLiftingUp size="3em" />
            <h1 className='ml-5 sm:text-4xl text-2xl font-bold ml-2 tracking-tight'>Coach Dowod</h1>
          </header>
          <main className='flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20'>
            <h1 className="sm:text-6xl text-4xl max-w-[708px] text-slate-700 antialiased">
              Generate your next <span className='font-bold text-red-950'>WOD</span> using AI Assistant
            </h1>
            {children}
          </main>
        </div>
        <script src="/canvas.js" async></script>
      </body>
    </html>
  )
}
