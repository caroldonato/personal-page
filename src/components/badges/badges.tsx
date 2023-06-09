import * as React from 'react';
import { BadgeIcon, BadgeWrapper } from './badges.style';
import { hoverableStyle } from '../layout/layout.style';

type BadgeProps = {
    Icon: React.ReactNode;
    Description: string;
    Details?: string;
    Experience?: { Value: number, Unit: string };
    Color: string;
};

const Badge: React.FC<BadgeProps> = (props) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <BadgeWrapper className="bg-zinc-700 rounded-md p-4" style={hoverableStyle(isHovered, props.Color)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <BadgeIcon style={{ color: isHovered ? (props.Color ?? "#fff") : "#fff", transition: "color 0.25s ease-in" }}>
                {props.Icon}
            </BadgeIcon>
            <div className='flex flex-col justify-center items-center pointer-events-none'>
                {props.Description}
                {/* <br/>
                <div>
                    {props.Details != null && (
                        props.Details
                    )}
                </div> */}
                <br />
                {props.Experience && (
                    props.Experience.Value + " " + props.Experience.Unit
                )}
            </div>
        </BadgeWrapper>
    );
};

export default Badge;