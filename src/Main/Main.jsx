import Header from "../components/Header/Header"
import Slider from "../components/Slider/Slider";
import Section from "../components/section/Section";
import { categories } from "../components/data/data";
import { sectionContent } from "../components/data/data";



function Main() {
    return (
        <div>
            <Header />
            <Slider />

            {
                sectionContent.map((sectionContent) => {
                    return (
                        <Section categories={categories} sectionContent={sectionContent} />
                    )
                })
            }


        </div>
    );
}

export default Main;
