import React, { useState } from "react";
import Card from './Card';


function Projects() {
    const projects = [
        {
            title: "Coupang-Discovery",
            image: "Coupang-Discovery.png",
            detail: "쿠팡 웹페이지의 <오늘의 발견> 영역을 마크업한 결과물입니다.",
            start: "2022.05.12",
            end: "2022.05.14",
            tech: ["HTML5", "CSS3"],
            work: ["HTML 마크업", "CSS 스타일링"],
            demo: "https://savinpark.github.io/coupang-discovery/",
            source: "https://github.com/SavinPark/coupang-discovery",
        },
        {
            title: "Coupang-Offer",
            image: "Coupang-Offer.png",
            detail: "쿠팡 웹페이지의 <오늘의 쇼핑 제안> 영역을 마크업한 결과물입니다.",
            start: "2022.05.12",
            end: "2022.05.14",
            tech: ["HTML5", "CSS3"],
            work: ["HTML 마크업", "CSS 스타일링"],
            demo: "https://savinpark.github.io/coupang-offer/",
            source: "https://github.com/SavinPark/coupang-offer",
        },
        {
            title: "Coupang-Category Best",
            image: "Coupang-CategoryBest.png",
            detail: "쿠팡 웹페이지의 <카테고리별 추천 광고상품> 영역을 마크업한 결과물입니다.",
            start: "2022.05.12",
            end: "2022.05.14",
            tech: ["HTML5", "CSS3"],
            work: ["HTML 마크업", "CSS 스타일링"],
            demo: "https://savinpark.github.io/coupang-categoryBest/",
            source: "https://github.com/SavinPark/coupang-categoryBest",
        },
        {
            title: "Coupang-Header",
            image: "Coupang-Header.png",
            detail: "쿠팡 웹페이지의 <헤더> 영역을 마크업한 결과물입니다.",
            start: "2022.05.12",
            end: "2022.05.14",
            tech: ["HTML5", "CSS3", "JavaScript"],
            work: ["HTML 마크업", "CSS 스타일링"],
            demo: "https://savinpark.github.io/coupang-header/",
            source: "https://github.com/SavinPark/coupang-header",
        },
        {
            title: "Coupang-Nav & Footer",
            image: "Coupang-NavFooter.png",
            detail: "쿠팡 웹페이지의 <네비게이션>과 <푸터> 영역을 마크업한 결과물입니다.",
            start: "2022.05.12",
            end: "2022.05.14",
            tech: ["HTML5", "CSS3", "JavaScript", "Iconfont"],
            work: ["HTML 마크업", "CSS 스타일링"],
            demo: "https://savinpark.github.io/coupang-navigationFooter/",
            source: "https://github.com/SavinPark/coupang-navigationFooter",
        },
        {
            title: "DatePicker & Calender",
            image: "DatepickerCalendar.png",
            detail: "재사용 가능하도록 ES Module을 활용하여 구현한 커스텀 DatePick와 Calender입니다.",
            start: "2022.06.09",
            end: "2022.06.12",
            tech: ["HTML5", "CSS3", "JavaScript"],
            work: ["HTML 마크업", "CSS 스타일링", "JavaScript 모듈화 및 기능 구현"],
            demo: "https://savinpark.github.io/Calendar-and-DatePicker/",
            source: "https://github.com/SavinPark/Calendar-and-DatePicker/",
        },
        {
            title: "Infinite News Viewer",
            image: "NewsViewer.png",
            detail: "News API를 활용하여 구현한 무한 스크롤 뉴스 뷰어입니다. [참고: 본 프로젝트는 무로 apikey를 사용하였습니다. News API 정책 변경으로 무료 apikey는 localhost에서만 작동합니다.]",
            start: "2022.06.13",
            end: "2022.06.15",
            tech: ["HTML5", "CSS3", "JavaScript", "Event delegation", "Intersection Observer API", "Proxy", "Observer Pattern"],
            work: ["Component 구현", "News API 연동", "Infinite Scroll 구현"],
            demo: "https://savinpark.github.io/infiniteScroll-newsViewer/",
            source: "https://github.com/SavinPark/infiniteScroll-newsViewer",
        },
        {
            title: "Weahter",
            image: "Weather.png",
            detail: "Openweathermap API를 활용 구현한 실시간 날씨 정보를 제공하는 웹페이지입니다.",
            start: "2022.06.05",
            end: "2022.06.30",
            tech: ["Scss", "React", "react hook", "router", "axois"],
            work: ["Design", "Frontend"],
            demo: "https://savinpark.github.io/weather--react/",
            source: "https://github.com/SavinPark/weather--react",
        },
        {
            title: "Eat Healthy",
            image: "EatHealthy.png",
            detail: "식단 영양 정보 분석 & 레시피 검색 및 관리 기능을 제공하는 웹서비스입니다.",
            start: "2022.06.05",
            end: "2022.06.30",
            tech: ["Scss", "React", "react hook", "router", "axois"],
            work: ["Design", "Frontend"],
            demo: "https://savinpark.github.io/Eat-Healthy/",
            source: "https://github.com/SavinPark/Eat-Healthy",
        },
        {
            title: "MRS",
            image: "MRS.png",
            detail: "인턴 기간 과제 프로젝트로 작업한 사내 유지보수 보고서 관리 프로그램입니다.",
            start: "2022.02.07",
            end: "2022.03.30",
            tech: ["MySQL", "Java", "Spring", "JSP", "MyBatis", "Bootstrap"],
            work: ["데이터베이스 설계 및 구축", "MVC 구조의 Backend 구현", "Bootstrap을 활용한 Frontend 구현"],
            demo: "#projects",
            source: "https://github.com/SavinPark/MRS",
        },
        {
            title: "Portfolio",
            image: "Portfolio.png",
            detail: "개인 포트폴리오 웹페이지 입니다.",
            start: "2022.06.28",
            end: "2022.07.01",
            tech: ["Scss", "styled-component", "React", "react hook"],
            work: ["Design", "Frontend"],
            demo: "https://savinpark.github.io/portfolio/",
            source: "https://github.com/SavinPark/portfolio",
        },
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

    return(
        <section id="projects">
            <h2>PROJECTS</h2>
            <div className="flipBtn">
            <button className="filp-all" onClick={() => {setFlipAll(!flipAll)}}>
                { !flipAll ? (<span>Flip All &gt;</span>) : (<span>Reset &gt;</span>)}
            </button>
            </div>
            <div className="projects-grid">
                {
                    projects.map((ele, idx) => {
                        return(
                            <div key={`proj-${idx}`} className={(flip === idx) || flipAll ? "flip active" : "flip" } onClick={() => {cardFlip(idx)}}>
                                <Card proj={ele} />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Projects;