import React, {useState} from "react";
import Card from './Card';


function Projects() {
    const projects = [
        {
            title: "개인프로젝트 - HanDari",
            image: "Coupang-Discovery.png",
            detail: "쿠팡 웹페이지의 <오늘의 발견> 영역을 마크업한 결과물입니다.",
            start: "2022.05.12",
            end: "2022.05.14",
            tech: ["HTML5", "CSS3"],
            source: "https://github.com/SavinPark/coupang-discovery",
        },
        {
            title: "팀 프로젝트 - StarInfoWeb",
            image: "Coupang-Offer.png",
            detail: "쿠팡 웹페이지의 <오늘의 쇼핑 제안> 영역을 마크업한 결과물입니다.",
            start: "2022.05.12",
            end: "2022.05.14",
            tech: ["HTML5", "CSS3"],
            source: "https://github.com/SavinPark/coupang-offer",
        },
        {
            title: "Todo List App",
            image: "Coupang-CategoryBest.png",
            detail: "쿠팡 웹페이지의 <카테고리별 추천 광고상품> 영역을 마크업한 결과물입니다.",
            start: "2022.05.12",
            end: "2022.05.14",
            tech: ["HTML5", "CSS3"],
            source: "https://github.com/SavinPark/coupang-categoryBest",
        },
        {
            title: "박태은 웹 포트폴리오",
            image: "Portfolio.png",
            detail: "개발자 박태은의 웹 포트폴리오입니다.",
            start: "2024.12.26",
            end: "2024.12.31",
            tech: ["HTML5", "React", "JavaScript", "scss", "css"],
            source: "https://github.com/SavinPark/coupang-header",
        }
    ]
    const [flipAll, setFlipAll] = useState(false);
    const [flip, setFlip] = useState(-1);
    const cardFlip = (n) => {
        if (flip !== -1) {
            setFlip(-1)
        } else {
            setFlip(n)
        }
    }

    return (
        <section id="projects">
            <h2>PROJECTS</h2>
            <div className="flipBtn">
                <button className="filp-all" onClick={() => {
                    setFlipAll(!flipAll)
                }}>
                    {!flipAll ? (<span>Flip All &gt;</span>) : (<span>Reset &gt;</span>)}
                </button>
            </div>
            <div className="projects-grid">
                {
                    projects.map((ele, idx) => {
                        return (
                            <div key={`proj-${idx}`} className={(flip === idx) || flipAll ? "flip active" : "flip"}
                                 onClick={() => {
                                     cardFlip(idx)
                                 }}>
                                <Card proj={ele}/>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Projects;