
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import Image from "next/image";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Cardmini(props) {
    const {title, tabs, description} = props;
    return (
        <div className="bg-transparent animate-fade-up animate-once animate-delay-[500ms] animate-ease-linear">

            <section aria-labelledby="features-heading" className="mx-auto max-w-7xl py-12 sm:px-2 lg:px-8">

                <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">

                    <div className="max-w-3xl">
                        <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {title}
                        </h2>
                        <p className="mt-4 text-black">
                            {description}
                        </p>
                    </div>

                    <Tab.Group as="div" className="mt-4">
                        <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                            <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                                <Tab.List className="-mb-px flex space-x-10">
                                    {tabs.map((tab) => (
                                        <Tab
                                            key={tab.name}
                                            className={({ selected }) =>
                                                classNames(
                                                    selected
                                                        ? 'border-green-500 text-green-600'
                                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                    'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                                                )
                                            }
                                        >
                                            {tab.name}
                                        </Tab>
                                    ))}
                                </Tab.List>
                            </div>
                        </div>

                        <Tab.Panels as={Fragment}>
                            {tabs.map((tab) => (
                                <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                                    {tab.features.map((feature) => (
                                        <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                                            <div className="mt-6 lg:col-span-5 lg:mt-0">
                                                <h3 className="text-xl font-medium text-gray-900">{feature.name}</h3>
                                                <p className="mt-2 text-lg text-black">{feature.description}</p>
                                            </div>
                                            <div className="lg:col-span-7">
                                                <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-3 sm:aspect-w-6">
                                                    <Image src={feature.imageSrc} fill={true} priority alt={"sukcesy"} className={"absolute inset-0 h-full w-full bg-gray-50 object-cover"}/>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </section>
        </div>
    )
}
