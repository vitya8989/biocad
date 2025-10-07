import {MainData, SliderData} from "@/types";
import {getPageData} from "@/api/page";
import {TopBlock} from "@/components/TopBlock/TopBlock";
import {getSliderData} from "@/api/slider";
import {Slider} from "@/components/Slider/Slider";

export default async function Home() {
    const [mainData, sliderData] = await Promise.all([
        getPageData(),
        getSliderData()
    ]);

    return (
        <>
            <TopBlock data={mainData}/>
            {sliderData.enabled && (<Slider data={sliderData} />)}
        </>
    );
}
