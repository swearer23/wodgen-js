import './globals.css'
import { GiWeightLiftingUp } from 'react-icons/gi'
import { Analytics } from '@vercel/analytics/react';
import Subscribe from './components/Subscribe';

const heroBgStyle = {
  backgroundImage: 'url(/images/hero-bg@2x.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
}

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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Roboto+Mono:wght@100;400&display=swap" rel="stylesheet"></link>
      </head>
      <body className="flex justify-center px-5" style={heroBgStyle}>
        <div className='flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen min-w-xl'>
          <header className='items-end w-full mt-2 sm:px-4 px-2'>
            <h1 className='sm:text-4xl text-2xl font-bold ml-2 tracking-tight inline-block align-text-bottom' style={{ display: 'inline-flex', alignItems: 'baseline' }}>
              <GiWeightLiftingUp size="1em" style={{ verticalAlign: 'middle' }} />
              <span className='ml-2' style={{ verticalAlign: 'middle', fontSize: '1.3em' }}>Coach Dowod</span>
            </h1>
          </header>
          <main className='flex flex-1 w-full flex-col px-4 mt-12 sm:mt-20'>
            <div>
              <h1 className="sm:text-6xl text-4xl max-w-[708px] text-gray-200 antialiased mb-4">
                Generate your next <span className='maroon'>WOD</span> using AI Assistant
              </h1>
              {/* <button className="btn btn-active btn-sm bg-gray-800 border-red-700 text-white mb-5">Sign Up</button> */}
              <p>Subscribe to receive <b className='maroon'>FREE</b> WOD Everyday</p>
            </div>
            <Subscribe />
            {children}
          </main>
          <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t border-gray-600 mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3">
            <div>Powered by <a href="https://openai.com/blog/chatgpt" target="_blank" className="font-bold hover:underline transition underline-offset-2">ChatGPT </a> 
            and <a href="https://js.langchain.com/" target="_blank" className="font-bold hover:underline transition underline-offset-2">LangChainJS</a></div>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
