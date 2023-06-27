
export default function MottoComponent() {
    return (
        <div className="fixed isolate bg-transparent items-center pb-32 pt-24 sm:pt-32 ">
            <div
                className="absolute inset-x-0 top-1/2 -z-10 transform-gpu overflow-hidden opacity-30 blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#16a34a] to-[#16a34a]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div
                className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
                aria-hidden="true"
            >
                <div
                    className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#16a34a] to-[#16a34a] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className=" lg:ml-64 max-w-7xl px-6 lg:px-8">
                <div className="mx-center max-w-xl text-center">
                    <h2 className="text-xl font-semibold leading-8 tracking-tight text-green-600 mb-5 animate-fade-up animate-once animate-delay-[500ms] animate-ease-linear">Moje zawodowe motto:</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-fade-up animate-once animate-delay-[1000ms] animate-ease-linear">
                        To, co w sprzedaży ekscytuje, ale i rodzi problemy, to zdobycie klienta na zawsze. Sekretem utrzymania lojalności klienta jest troska o jego interesy; rolą sprzedawcy jest pomóc klientowi dokonać jak najlepszego zakupu.                 </p>
                </div>
            </div>
        </div>
    )
}