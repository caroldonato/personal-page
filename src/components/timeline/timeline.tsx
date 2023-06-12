import * as React from "react";
import { TimelineBubble, TimelineBubbleContent, TimelineStem } from "./timeline.styles";

type TimelineProps = {

}

const Timeline:React.FC<TimelineProps> = (props) => {
    return (
        <TimelineStem>
            <TimelineBubble className=" left">
                <TimelineBubbleContent>
                <h2><b>2015 - 2021</b></h2>
                <p>Universidade Estadual de Londrina - Bachelor's Degree in Computer Science</p>
                </TimelineBubbleContent>
            </TimelineBubble>
            <TimelineBubble className=" right">
                <TimelineBubbleContent>
                <h2>2020</h2>
                <p>Internship at Anexs Tecnologia</p>
                </TimelineBubbleContent>
            </TimelineBubble>
            <TimelineBubble className=" left">
                <TimelineBubbleContent>
                <h2>2021 - Present</h2>
                <p>Fullstack Developer at Anexs Tecnologia</p>
                </TimelineBubbleContent>
            </TimelineBubble>
        </TimelineStem>
    );
}

export default Timeline;