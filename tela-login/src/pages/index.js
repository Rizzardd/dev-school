import Image from 'next/image'
import Deer from '../../public/deer.png'

export default function Home() {
  return (
    <>
      <div className='flex bg-gradient-to-r from-cyan-500 to-blue-500 h-screen p-0 m-0 justify-center' id='full-page'>
        <div className='max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-2xl my-20 w-1/4 h-auto rounded-l-lg' id='login-page'>
          <div className='max-w-md mx-auto w-32 h-32' id='logo'>
            <Image className='h-48 w-full object-cover md:h-full md:w-48' src={Deer}></Image>
          </div>
          <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl font-mono text-2xl text-blue-900 text-center my-2 w-6/12 h-auto' id='text-logo'>
            <h1>Vortex Game Club</h1>
          </div>
          <div className='max-w-md mx-auto rounded-xl '>
            <div className='tracking-wide text-sm text-blue-600 font-normal mt-20 mx-10 opacity-75 contrast-more:opacity-100 flex-col space-y-4'>
              <form>
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500  block text-sm font-medium text-slate-700">Email</span>
                  <input type="email" className="peer mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                 invalid:border-pink-500 invalid:text-pink-600
                 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" required />
                  <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                    Please provide a valid email address.
                  </p>

                </label>
                <label className='block my-8'>
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500  block text-sm font-medium text-slate-700">Password</span>
                <input type="password" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                 invalid:border-pink-500 invalid:text-pink-600
                 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
                </label>
              </form>
            </div>
          </div>
          <div className='max-w-md mx-auto rounded-xl shadow-md w-32 h-12 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-800 duration-300 text-white my-10'>
            <button className='my-3 w-6/12 h-auto mx-8'>Login</button>
          </div>
          <div className='flex max-w-md mx-auto w-52 h-10 my-16 justify-center'>
            <p className='text-center'>Don't have an account?</p>
            <button className='text-blue-600 outline outline-offset-2 outline-1  w-6/12 rounded-xl'>Create</button>
          </div>
        </div>
      </div>
    </>
  )
}
