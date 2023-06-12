import * as React from 'react';
import { useCollapse } from 'react-collapsed';
import { CollapsibleWrapper } from './collapsible.style';

import { FaAngleDown } from 'react-icons/fa';

type CollapsibleProps = {
    title: string,
    children?: JSX.Element
};

const Collapsible: React.FC<CollapsibleProps> = (props) => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <CollapsibleWrapper className="collapsible">
            <div className="header" {...getToggleProps()}>
                <div className='header-title'>{ props.title }</div>
                <div><FaAngleDown style={{ transform: isExpanded ? "rotate(180deg)" : "", transition: "all 0.25s ease-in" }}/></div>
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    { props.children }
                </div>
            </div>
        </CollapsibleWrapper>
    );
}

export default Collapsible;