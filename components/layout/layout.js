import {Fragment, useEffect} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import {useRouter} from "next/router";
import Link from "next/link";

const navigation = [
    { name: 'O mnie', href: '/', current: false },
    { name: 'Motto', href: '/motto', current: false },
    { name: 'Co robiłem wcześniej', href: '/przeszlosc', current: false },
    { name: 'Filary', href: '/filary', current: false },
    { name: 'Sukcesy zawodowe', href: '/sukcesy-zawodowe', current: false },
    { name: 'Opinie', href: '/opinie', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Layout({children}) {
    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-green-600">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <Image src={"/static/Leroy-merlin-logo1.png"} priority={true} width={90} height={30} alt={"Logo"} />
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-green-700 text-white'
                                                                : 'text-white hover:bg-green-500 hover:bg-opacity-75',
                                                            'rounded-md px-3 py-2 text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-green-600 p-2 text-green-200 hover:bg-green-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? 'bg-green-700 text-white'
                                                    : 'text-white hover:bg-green-500 hover:bg-opacity-75',
                                                'block rounded-md px-3 py-2 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <main>
                    <div className="mx-auto max-w-7xl py-2 sm:px-6 lg:px-8"> <div
                        className="fixed inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden opacity-25 blur-3xl xl:justify-end"
                        aria-hidden="true"
                    >
                        <div
                            className="ml-[-22rem] aspect-[999/999] w-[96.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#16a34a] to-[#16a34a] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />

                    </div>{children}</div>
                </main>
            </div>
        </>
    )
}
