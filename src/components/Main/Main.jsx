


import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Section from "../section/Section";
import { categories } from "../data/data";
import { sectionContent } from "../data/data";


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
