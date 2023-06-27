import SukcesyMiniComponent from "./SukcesyMiniComponent";

export default function SukcesyComponent(props) {
    const {sukcesy, title, description} = props
return(

    <div className="mx-auto w-full max-w-7xl grow lg:flex xl:px-2">
        <div className="flex-1 xl:flex">
            <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
                <SukcesyMiniComponent sukcesy={sukcesy} title={title} description={description}/>
            </div>
        </div>
    </div>
    )
}
