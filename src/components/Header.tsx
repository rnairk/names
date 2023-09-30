import {UserIcon} from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <header className='flex bg-slate-900 p-2 gap-x-3 items-center align-middle '>
        <UserIcon className='w-5 text-white' />
        <h1 className='text-white font-bold text-2xl'>NAMES</h1>
    </header>
  )
}

export default Header