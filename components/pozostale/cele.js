// const timeline = [
//     {
//         name: 'Founded company',
//         description:
//             'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
//         date: 'Aug 2021',
//         dateTime: '2021-08',
//     },
//     {
//         name: 'Secured $65m in funding',
//         description:
//             'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
//         date: 'Dec 2021',
//         dateTime: '2021-12',
//     },
//     {
//         name: 'Released beta',
//         description:
//             'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
//         date: 'Feb 2022',
//         dateTime: '2022-02',
//     },
//     {
//         name: 'Global launch of product',
//         description:
//             'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
//         date: 'Dec 2022',
//         dateTime: '2022-12',
//     },
// ]
//
// export default function CeleComponent() {
//     return (
//
//         <div>
//         <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-green-100/20">
//             <div
//                 className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-green-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
//                 aria-hidden="true"
//             />
//             <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
//                 <div
//                     className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
//                     <h4 className="max-w-2xl text-xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:col-span-2 xl:col-auto">
//                         Cały świat usuwa się z drogi człowiekowi który wie dokąd zmierza...
//                     </h4>
//                     <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
//                         <p className="text-lg leading-8 text-gray-600">
//                             Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
//                             Elit sunt
//                             amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt
//                             sunt. Qui
//                             irure qui lorem cupidatat commodo.
//                         </p>
//                     </div>
//                     <img
//                         src="https://retail360.pl/wp-content/uploads/2016/02/Leroy-merlin-logo.png"
//                         alt=""
//                         className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-10"
//                     />
//                 </div>
//             </div>
//             <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"/>
//         </div>
//     <div className="mx-auto -mt-28 max-w-7xl px-6 lg:px-4">
//         <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
//             {timeline.map((item) => (
//                 <div key={item.name}>
//                     <time
//                         dateTime={item.dateTime}
//                         className="flex items-center text-sm font-semibold leading-6 text-green-600"
//                     >
//                         <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
//                             <circle cx={2} cy={2} r={2} fill="currentColor"/>
//                         </svg>
//                         {item.date}
//                         <div
//                             className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
//                             aria-hidden="true"
//                         />
//                     </time>
//                     <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
//                     <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
//                 </div>
//             ))}
//         </div>
//     </div>
//         </div>
// )
// }


import {
    AcademicCapIcon,
    BanknotesIcon,
    CheckBadgeIcon,
    ClockIcon,
    ReceiptRefundIcon,
    UsersIcon,
    CircleStackIcon,
    SunIcon
} from '@heroicons/react/24/outline'

const actions = [
    {
        title: 'Różnorodność',
        href: '#',
        description: 'Zgrany i różnorodny ZESPÓŁ to wielkie wyzwanie dla menadżera. Jednak jest to też atut, który w obecnych czasach trzeba wykorzytsać',
        icon: UsersIcon,
        iconForeground: 'text-teal-700',
        iconBackground: 'bg-teal-50',
    },
    {
        title: 'Efektywność',
        description: 'To ważne aby skupiać się na skuteczności działań i procesów, ale też na ich efektywności. Trzeba nauczyć się efektywnie pracować z efektywnością.',
        href: '#',
        icon: CheckBadgeIcon,
        iconForeground: 'text-purple-700',
        iconBackground: 'bg-purple-50',
    },
    {
        title: 'Konsekwencja',
        href: '#',
        description:'Zaczynać i kończyć. Trzymać się ustalonych reguł. Proste?',
        icon: SunIcon,
        iconForeground: 'text-sky-700',
        iconBackground: 'bg-sky-50',
    },
    {
        title: 'Wykorzystanie danych',
        href: '#',
        description: 'Dookoła jest ich bardzo dużo - stale musimy uczyć się je wykorzystywać.',
        icon: CircleStackIcon,
        iconForeground: 'text-yellow-700',
        iconBackground: 'bg-yellow-50',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <div className="">

            <section className="relative isolate overflow-hidden bg-transparent px-6 py-20 sm:py-20 lg:px-8">
                {/*<div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.green.300),white)] opacity-20" />*/}
                {/*<div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-transparent shadow-xl shadow-green-600/10 ring-1 ring-green-100 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />*/}
                <div className="mx-auto max-w-2xl lg:max-w-4xl animate-fade-up animate-once animate-delay-[500ms] animate-ease-linear">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                            <p className="mt-0">
                                Filary mojej pracy:
                            </p>
                            <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-transparent shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 h-full mt-8">
                                {actions.map((action, actionIdx) => (
                                    <div
                                        key={action.title}
                                        className={classNames(
                                            actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                                            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                                            actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                                            actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                                            'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-500'
                                        )}
                                    >
                                        <div>
            <span
                className={classNames(
                    action.iconBackground,
                    action.iconForeground,
                    'inline-flex rounded-lg p-3 ring-4 ring-white'
                )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
                                        </div>
                                        <div className="mt-8">
                                            <h1 className="text-2xl font-semibold leading-6 text-gray-900 mb-5">
                                                <a href={action.href} className="focus:outline-none">
                                                    {/* Extend touch target to entire panel */}
                                                    <span className="absolute inset-0" aria-hidden="true" />
                                                    {action.title}
                                                </a>
                                            </h1>
                                            <p className="mt-2 text-lg text-gray-500">
                                                {action.description}
                                            </p>
                                        </div>
                                        <span
                                            className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                                            aria-hidden="true"
                                        >
            {/*<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">*/}
                                            {/*  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />*/}
                                            {/*</svg>*/}
          </span>
                                    </div>
                                ))}
                            </div>

                        </blockquote>
                </div>
            </section>


        </div>
    )
}
