import Image from "next/image";
import ListaPracy from "./listaPracy";

const posts = [
    {
        id: 1,
        title: 'Krono Original',
        href: '#',
        description:
            'To początek mojej zawodowej drogi. Pierwsza praca... w handlu... w branży DIY... - przypadek? Pierwszy kontakt z Klientem i ekspozycją.',
        imageUrl:
            '/static/krono.png',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'Castorama Rumia',
        href: '#',
        description:
            'Doradca Klienta na dziale drzewnym. Pierwsza większa odpowiedzialność i okazja do pokazania swoich możliwości - ' +
            'prowadzenie Alejki Handlowej. Wyzwnanie, które pokazało mi, że handel to coś dla mnie',
        imageUrl:
            '/static/castonowe.png',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'Decathlon Rumia',
        href: '#',
        description:
            'Tutaj dostałem możliwość zostania Kierownikiem i autonomicznego zarządzania biznesem - najbardziej sezonowy i ' +
            'największy Dział Rowery/Serwis, potem jeszcze Dział Woda, a na koniec Kasy i Punkt Obsługi Klienta. ' +
            'Praca z 20 osobowym zespołem pokazała mi jak bardzo ważna jest współpraca i dobra komunikacja - tutaj stałem się Menagerem. ',
        imageUrl:
            '/static/Decathlon_Logo.png',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 4,
        title: 'Decathlon Komorniki',
        href: '#',
        description:
            'Kolejny etap mojej pracy w Decathlon to stanowisko Menagera Operacyjnego - współpraca z firmami serwisującymi sklepy w aglomeracji poznańskiej, ' +
            'opiekowanie się procesami związanymi z funkcjonowaniem obiektu i jego bezpieczeństwem, a także rola Coacha dla Menagerów. ' +
            'To obowiązki, które wymagały dobrej organizacji oraz dzielenia się odpowiedzialnościami z współpracownikami. To dla mnie moment, w którym staje się Liderem. ',
        imageUrl:
            '/static/Decathlon_Logo.png',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 5,
        title: 'Decathlon Kalisz',
        href: '#',
        description:
            'Moje zawodowe marzenie się spełniło i powierzono mi rolę Lidera Sklepu. 40 osobowy zespół to stale pojawiające ' +
            'się wyzwania i ogromna odpowiedzialność handlowa, ale także możliwość rozwoju i sprawdzenia się w tak ważnej roli w Aglomeracji Kaliskiej. To stanowisko pozwoliło mi dostrzec, że Lider Sklepu to ten, który dba o relacje i utrzymanie kierunku, w którym idzie cały zespół.',
        imageUrl:
            '/static/Decathlon_Logo.png',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    }
    // More posts...
]

export default function PrzeszloscComponent() {
    return (
        <ListaPracy/>
        // <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        //     {posts.map((post) => (
        //         <div key={post.id}
        //             className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        //             <div className="relative aspect-auto sm:aspect-[1/2] lg:aspect-square sm:w-1/6 h-24 lg:w-40 h-8 lg:shrink-0 lg:mx-auto lg:mt-6 ">
        //                                                      <Image src={post.imageUrl} fill={true} priority alt={"logo"} className={"rounded-lg"} />
        //                                               </div>
        //             <div className="p-5">
        //                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{post.title}</h5>
        //                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">{post.description}</p>
        //             </div>
        //         </div>
        //     ))}
        // </div>
    )
}
