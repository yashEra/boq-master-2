import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import ProList from './UsersList';
import ClientList from './ClientList';

const navigation = [
  { name: 'Dashboard', href: '/adminz-boq-mz', current: true },
  { name: 'Row Material', href: '/adminz-rowz', current: false },
  { name: 'other', href: '/other', current: false },
];

const userNavigation = [
  // { name: 'Your Profile', href: '#' },
  // { name: 'Settings', href: '#' },
  // { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function AdminHome() {
  return (
    <>
      <div className="min-h-screen flex bg-gray-100">
        <Disclosure as="nav" className="bg-gray-800 w-64 min-h-full flex flex-col">
          {({ open }) => (
            <>
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8"
                      src="http://localhost:3000/assest/logo/logo.jpg"
                      alt="Your Company"
                    />
                  </div>
                  <div className="ml-3">
                    {/* <h1 className="text-white text-lg font-semibold">Dashboard</h1> */}
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>

              <div className="flex-1 flex flex-col overflow-y-auto">
                <div className="flex-1 flex flex-col space-y-1 p-4">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>

                <div className="border-t border-gray-700 p-4">
                  <div className="mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>

        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">BoQ Master</h1>
            </div>
          </header>

          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              <ProList />
              <ClientList />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
