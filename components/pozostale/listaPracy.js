import Image from "next/image";

export default function ListaPracy() {
    return (

    <section className=" dark:bg-gray-900 antialiased mb-0 py-0 bg-transparent">

            <div className="max-w-screen-xl px-4 mx-auto lg:px-6 ">
                <div className="max-w-3xl mx-auto space-y-4 text-center">
                    <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white mt-5 animate-fade-up animate-once animate-delay-[500ms] animate-ease-linear">
                        Czym wcześniej się zajmowałam?
                    </h2>
                </div>

                <div className="grid grid-cols-1 mt-12 lg:mt-16 lg:grid-cols-2 gap-y-12 gap-x-16">
                    <div className="space-y-8">
                        <div>
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">

                                <div className="hidden w-px bg-gray-200 sm:shrink-0 dark:bg-gray-700 sm:block">
                                </div>
                                <div className="flex-1 pb-8 space-y-4 sm:pb-12">

                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                        <p className="hover:underline animate-fade-up animate-once animate-delay-[600ms] animate-ease-linear">Krono Original</p>
                                    </h4>
                                    <p className="text-black dark:text-gray-400 text-lg font-normal animate-fade-up animate-once animate-delay-[700ms] animate-ease-linear">
                                        Pracując w Kro Original, zajmowałam się sprzedażą ekskluzywnych podłóg i dodatków. Moim głównym zadaniem było doradzanie klientom w wyborze odpowiednich produktów, tworzenie aranżacji i zapewnianie doskonałej obsługi. Dbając o detale, starałam się zapewnić klientom niezapomniane doświadczenie zakupowe.</p>
                                    <div className="flex items-center gap-3">
                                        <div className=" overflow-hidden bg-gray-100 animate-fade-up animate-once animate-delay-[800ms] animate-ease-linear ">
                                        <Image src={"/static/krono-original.jpg"} width={90} height={30} priority alt={"krono"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
                                <div className="hidden w-px bg-gray-200 sm:shrink-0 dark:bg-gray-700 sm:block"></div>
                                <div className="flex-1 pb-8 space-y-4 sm:pb-12">
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                        <a href="#" className="hover:underline animate-fade-up animate-once animate-delay-[900ms] animate-ease-linear">Castorama</a>
                                    </h4>
                                    <p className="text-black dark:text-black text-base font-normal animate-fade-up animate-once animate-delay-[1000ms] animate-ease-linear">
                                        W Castoramie miałam okazję pracować w dziale budowlanym. Moje zadania obejmowały pomoc klientom w znalezieniu odpowiednich materiałów i narzędzi do ich projektów, udzielanie porad technicznych oraz obsługę kas. Byłam często zaangażowana w projektowanie i organizację działu, aby zapewnić, że produkty były prezentowane w atrakcyjny sposób.
                                    </p>
                                    <div className="flex items-center gap-3 animate-fade-up animate-once animate-delay-[1100ms] animate-ease-linear">
                                        <Image src={"/static/castonowe.png"} width={150} height={30} priority alt={"castorama"}/>

                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">

                                <div className="hidden w-px bg-gray-200 sm:shrink-0 dark:bg-gray-700 sm:block"></div>
                                <div className="flex-1 pb-8 space-y-4 sm:pb-12">
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                        <a href="#" className="hover:underline animate-fade-up animate-once animate-delay-[1200ms] animate-ease-linear">Decathlon</a>
                                    </h4>
                                    <p className="text-black dark:text-gray-400 text-base font-normal animate-fade-up animate-once animate-delay-[1300ms] animate-ease-linear">Jako kierownik w Decathlonie, zarządzałam sklepem, nadzorowałam działalność handlową, motywowałam zespół, dbałam o obsługę klienta, monitorowałam stan magazynowy, planowałam harmonogramy pracy, tworzyłam strategie sprzedaży i analizowałam dane sprzedażowe. </p>
                                    <div className="flex items-center gap-3 animate-fade-up animate-once animate-delay-[1400ms] animate-ease-linear">
                                        <Image src={"/static/Decathlon_Logo.png"} width={150} height={30} priority alt={"decathlon"}/>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
                                <div className="hidden w-px bg-gray-200 sm:shrink-0 dark:bg-gray-700 sm:block"></div>
                                <div className="flex-1 pb-8 space-y-4 sm:pb-12">
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                        <a href="#" className="hover:underline animate-fade-up animate-once animate-delay-[1500ms] animate-ease-linear">Decathlon</a>
                                    </h4>
                                    <p className="text-black dark:text-gray-400 text-lg font-normal animate-fade-up animate-once animate-delay-[1600ms] animate-ease-linear">
                                        Na stanowisku administratora w Decathlon zajmowałam się różnorodnymi zadaniami biurowymi i administracyjnymi. Byłam odpowiedzialna za prowadzenie dokumentacji, zarządzanie korespondencją, organizację spotkań oraz obsługę korespondencji e-mailowej i telefonicznej. Pracowałam także nad sporządzaniem raportów, utrzymaniem baz danych i wspieraniem zespołu sprzedażowego w codziennych zadaniach. Moja precyzja, organizacja i zdolność do skutecznego zarządzania czasem były kluczowe w utrzymaniu płynności pracy biura.
                                        </p>
                                    <div className="flex items-center gap-3 animate-fade-up animate-once animate-delay-[1700ms] animate-ease-linear">
                                        <Image src={"/static/Decathlon_Logo.png"} width={150} height={30} priority alt={"decathlon"}/>

                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">

                                <div className="hidden w-px bg-gray-200 sm:shrink-0 dark:bg-gray-700 sm:block"></div>
                                <div className="flex-1 pb-8 space-y-4 sm:pb-12">
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                        <a href="#" className="hover:underline animate-fade-up animate-once animate-delay-[1800ms] animate-ease-linear">Decathlon</a>
                                    </h4>
                                    <p className="text-black dark:text-gray-400 text-lg font-normal animate-fade-up animate-once animate-delay-[1900ms] animate-ease-linear">Na stanowisku dyrektora w Decathlon miałam możliwość objęcia odpowiedzialności za ogólny rozwój i funkcjonowanie sklepu. Przede wszystkim nadzorowałam cały zespół, nadając kierunek i motywując członków do osiągania wyznaczonych celów. Opracowywałam strategie sprzedaży, nadzorowałam budżetowanie, prowadziłam analizy rynku i konkurencji oraz rozwijałam inicjatywy marketingowe. Współpracowałam również z różnymi działami w celu zapewnienia wysokiej jakości obsługi klienta i utrzymania doskonałej reputacji marki Decathlon.</p>
                                    <div className="flex items-center gap-3 animate-fade-up animate-once animate-delay-[2000ms] animate-ease-linear">
                                        <Image src={"/static/Decathlon_Logo.png"} width={150} height={30} priority alt={"decathlon"}/>


                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}