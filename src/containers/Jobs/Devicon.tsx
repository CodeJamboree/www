import { useEffect, useMemo } from "react";

enum Type {
    Plain = "plain",
    Original = "original",
    Line = "line"
}
interface IProps {
    icon: string,
    type?: Type,
    wordmark?: boolean,
    color?: boolean
}

const PREFIX = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest'
const URL = `${PREFIX}/devicon.min.css`;

const hasStyle = (head: HTMLHeadElement) => {
    const links = head.getElementsByTagName('link');
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        if (link.getAttribute('rel') !== 'stylesheet') continue;
        if ((link.getAttribute('href') ?? '').indexOf(PREFIX) === 0) return true;
    }
    return false;
}

const addStyle = (head: HTMLHeadElement) => {
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', URL);
    head.appendChild(link);
}

const ensureStyle = () => {
    const head = document.getElementsByTagName('head')[0];
    if (hasStyle(head)) return;
    addStyle(head);
};

const Devicon = ({ icon, type = Type.Plain, wordmark = false, color = false }: IProps) => {
    useEffect(ensureStyle, []);
    const className = useMemo(() => {
        if (icon === 'npm' || icon == 'go') {
            type = Type.Original;
            wordmark = true
        }
        const parts = ['devicon', icon, type];
        if (wordmark) parts.push('wordmark');
        const names = [parts.join("-")];
        if (color) names.push('colored');
        return names.join(" ");
    }, [icon, type, wordmark, color])
    return <i className={className} title={icon} />
};

export default Devicon;
