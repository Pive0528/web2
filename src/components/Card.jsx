import React from "react";
import styled from 'styled-components';
import { BsDot } from "react-icons/bs";

const CardFront=styled.div`
background-image: url(${props => props.ImgSrc});
background-size: contain;
background-repeat: no-repeat;
background-position: center;
`;

function Card ({proj}) {

    const onAlert = () => {
        if (proj.source === '#projects' || proj.detail === '#projects') {
            alert('준비 중 입니다 : )');
        }
    }
    return (
        <div className="projects-item">
            <CardFront className="project-front" ImgSrc={`${process.env.PUBLIC_URL}/images/${proj.image}`}>
                <div className="info">
                    <h3 className="title">{proj.title}</h3>
                    <p className="click-msg">click</p>
                </div>
            </CardFront>
            <div className="project-back">
                <h3>{proj.title}</h3>
                <div className="back-inner detail">
                    <p>{proj.detail}</p>
                </div>
                <div className="back-inner time">
                    <h4># Period</h4>
                    <p> {proj.start} ~ {proj.end}</p>
                </div>
                <div className="back-inner tech">
                    <h4># Tech</h4>
                    <ul className="lang">
                        {proj.tech.map((ele) => {
                        return(<li key={`${proj.title}-${ele}`}>{ele}</li>);
                        })}
                    </ul>
                </div>
                <div className="back-inner work">
                    <h4># My Work</h4>
                    <ul className="lang">
                        {proj.work.map((ele) => {
                        return(<li key={`${proj.title}-${ele}`}><BsDot className="dot"/>{ele}</li>);
                        })}
                    </ul>
                </div>
                <div className="btn-group" onClick={onAlert}>
                    <a href={proj.source}><button>Source Code</button></a>
                    <a href={proj.demo}><button>Demo</button></a>
                </div>
            </div>
        </div>
    );
}

export default Card;