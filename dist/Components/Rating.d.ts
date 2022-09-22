import React from 'react';
export interface Props {
    onClick?: (value: number) => void;
    initialValue?: number;
    ratingValue: number;
    iconsCount?: number;
    size?: number;
    readonly?: boolean;
    fillColor?: string;
    fillColorArray?: string[];
    emptyColor?: string;
    fullIcon?: React.ReactElement | null;
    emptyIcon?: React.ReactElement | null;
    customIcons?: {
        icon: React.ReactElement;
    }[];
    rtl?: boolean;
    allowHalfIcon?: boolean;
    allowHover?: boolean;
    allowHoverOnDefault?: boolean;
    transition?: boolean;
    className?: string;
    style?: React.CSSProperties;
    fullClassName?: string;
    emptyClassName?: string;
    fullStyle?: React.CSSProperties;
    emptyStyle?: React.CSSProperties;
    showTooltip?: boolean;
    tooltipDefaultText?: string;
    tooltipArray?: string[];
    tooltipClassName?: string;
    tooltipStyle?: React.CSSProperties;
    titleSeparator?: string;
}
export declare function Rating({ onClick, initialValue, ratingValue, iconsCount, size, readonly, fillColor, fillColorArray, emptyColor, fullIcon, emptyIcon, customIcons, rtl, allowHalfIcon, allowHover, allowHoverOnDefault, transition, className, style, fullClassName, emptyClassName, fullStyle, emptyStyle, showTooltip, tooltipDefaultText, tooltipArray, tooltipClassName, tooltipStyle, titleSeparator, }: Props): JSX.Element;
