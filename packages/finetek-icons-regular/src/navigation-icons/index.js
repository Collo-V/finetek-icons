import React from "react";

export function AngleDown({className, style}) {
    if (!className) className = ''
    const Icon = require('../assets/navigation-icons/angle-down-solid.svg').default
    const {ReactComponent: Svg} = Icon
    style = style ?? {}
    if (!className.includes('fill-')) {
        style = {
            ...style,
            fill: 'currentColor'
        }
    }
    return (
        <Icon className={className} style={style}/>
    )
}

export function AngleLeft({className, style}) {
    if (!className) className = ''
    className += ' rotate-90'
    const Icon = require('../assets/navigation-icons/angle-down-solid.svg').default
    const {ReactComponent: Svg} = Icon
    style = style ?? {}
    if (!className.includes('fill-')) {
        style = {
            ...style,
            fill: 'currentColor'
        }
    }
    return (
        <Icon className={className} style={style}/>
    )
}

export function AngleRight({className, style}) {
    if (!className) className = ''
    className += ' -rotate-90'
    const Icon = require('../assets/navigation-icons/angle-down-solid.svg').default
    const {ReactComponent: Svg} = Icon
    style = style ?? {}
    if (!className.includes('fill-')) {
        style = {
            ...style,
            fill: 'currentColor'
        }
    }
    return (
        <Icon className={className} style={style}/>
    )
}

export function AngleUp({className, style}) {
    if (!className) className = ''
    className += ' rotate-180'
    const Icon = require('../assets/navigation-icons/angle-down-solid.svg').default
    const {ReactComponent: Svg} = Icon
    style = style ?? {}
    if (!className.includes('fill-')) {
        style = {
            ...style,
            fill: 'currentColor'
        }
    }
    return (
        <Icon className={className} style={style}/>
    )
}

export function Bars({className, style}) {
    if (!className) className = ''
    const Icon = require('../assets/navigation-icons/bars-solid.svg').default
    const {ReactComponent: Svg} = Icon
    style = style ?? {}
    if (!className.includes('fill-')) {
        style = {
            ...style,
            fill: 'currentColor'
        }
    }
    return (
        <Icon className={className} style={style}/>
    )
}