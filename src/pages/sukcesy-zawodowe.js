import SukcesyComponent from "../../components/pozostale/sukcesy";
import sukcesyZawodowe from "../../data/sukcesyZawodowe.json";

export default function SukcesyZawodowe() {
    const sukcesyZaw = sukcesyZawodowe.sukcesyZawodowe;
    const title = "Sukcesy zawodowe";
    const description =  "W handlu pracuje od ponad 10 lat i jest kilka rzeczy, z których jestem dumny...";

    return (
        <SukcesyComponent sukcesy={sukcesyZaw} title={title} description={description}/>
    )
}