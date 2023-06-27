import Cardmini from "./cardmini";
import sukcesyZawodowe from '../../data/sukcesyZawodowe.json'
import sukcesyPrywatne from '../../data/sukcesyPrywatne.json';


export default function SukcesyMiniComponent(props) {
    const {sukcesy, title, descrption} = props;
    return(
        <div className="flex min-h-full flex-col">

            <div className="mx-auto w-full max-w-7xl grow lg:flex xl:px-2 lg:mt-10 mb-5">
                <div className="flex-1 xl:flex">
                    <div className="px-4 py-2 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
                        <Cardmini title={title} tabs={sukcesy} description={descrption} />
                    </div>
                </div>

            </div>
        </div>
    )
}
