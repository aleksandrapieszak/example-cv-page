import {CloudArrowUpIcon, LockClosedIcon, ServerIcon, BookOpenIcon, CakeIcon, UserGroupIcon, TrophyIcon, FaceSmileIcon} from '@heroicons/react/20/solid'
import Image from "next/image";
import {fillCacheWithDataProperty} from "next/dist/client/components/router-reducer/fill-cache-with-data-property";

export default function HomeComponent() {
    return (
        <div className="relative bg-transparent">
            <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
                <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
                    <div className="relative h-80 lg:-ml-8 lg:h-full lg:w-full lg:grow xl:ml-0 lg:mb-0">
                        <Image src={"/static/dwiekobiety.jpg"} fill={true} priority alt={"Ronald"} className={"absolute inset-0 h-full w-full bg-gray-50 object-cover"}/>
                    </div>
                </div>
                <div className="px-6 lg:contents">
                    <div
                        className="mx-auto max-w-2xl text-base pt-16 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-10 xl:w-1/2 ">
                        <p className="font-semibold leading-7 text-green-600 animate-fade-up animate-once animate-delay-[500ms] animate-ease-linear lg:animate-fade-left animate-once animate-delay-[500ms] animate-ease-linear">Kilka słów o mnie...</p>
                        <h4 className=" animate-fade-up animate-once animate-delay-[1000ms] animate-ease-linear lg:animate-fade-left animate-once animate-delay-[1000ms] animate-ease-linear mt-2 font-bold tracking-tight text-gray-900 sm:text-2xl">Anna
                            Xxxyyyzzz</h4>
                       <p className="mt-6 text-xl leading-8 text-gray-700 animate-fade-down animate-once animate-delay-[1500ms] animate-ease-linear lg:animate-fade-left animate-once animate-delay-[1500ms] animate-ease-linear">
                           Jestem Anna i mam 27 lat. Mieszkam w pięknym mieście Kraków w Polsce. Moje życie jest pełne pasji i fascynujących wyzwań. Obecnie pracuję jako przedstawicielka handlowa w jednym z wiodących przedsiębiorstw branży detalicznej.

                        </p>
                        <div className="mt-8 mb-10 max-w-xl text-base leading-7 text-gray-700 animate-fade-up animate-once animate-delay-[2000ms] animate-ease-linear lg:max-w-none lg:animate-fade-left animate-once animate-delay-[2000ms] animate-ease-linear">
                            <p>
                                Bardzo ważne jest dla mnie to jak spędzam wolny czas i to co pozwala mi odpocząć od codziennych obowiązków. Moje największe pasje to:
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600 text-lg">
                                <li className="flex gap-x-3">
                                    <TrophyIcon className="mt-1 h-5 w-5 flex-none text-green-600"
                                                      aria-hidden="true"/>
                                    <span>
                    <strong className="font-semibold text-gray-900">Moda i stylizacja.</strong>Uwielbiam śledzić najnowsze trendy w modzie i eksperymentować z różnymi stylami. Świadomość tego, co jest modne, pomaga mi w nawiązywaniu relacji z klientami i doradzaniu im w wyborze odpowiednich ubrań i dodatków.
                  </span>
                                </li>
                                <li className="flex gap-x-3">

                                    <BookOpenIcon className="mt-1 h-5 w-5 flex-none text-green-600"
                                                    aria-hidden="true"/>
                                    <span>
                    <strong className="font-semibold text-gray-900">Obsługa klienta.</strong> Pasjonuje mnie obsługa klienta i dbanie o ich zadowolenie. Uwielbiam nawiązywać kontakty z ludźmi, słuchać ich potrzeb i znaleźć dla nich najlepsze rozwiązania. Widzieć uśmiech na twarzy klienta, gdy pomogłam im znaleźć to, czego szukali, to moje największe zadowolenie.
                  </span>
                                </li>
                                <li className="flex gap-x-3">

                                    <CakeIcon className="mt-1 h-5 w-5 flex-none text-green-600" aria-hidden="true"/>
                                    <span>
                    <strong className="font-semibold text-gray-900">Analiza rynku i strategie sprzedaży.</strong> Czas spędzony w kuchni z najbliższymi
                                        Interesuje mnie analiza rynku i badanie zachowań konsumenckich. Staram się zrozumieć, jakie są preferencje klientów i jakie są trendy w handlu. Dzięki temu mogę dostosować strategie sprzedaży i marketingowe, aby osiągać lepsze wyniki i przyciągać większą liczbę klientów.
                  </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
