interface IDetail {
    header?: boolean,
    text: string
}
interface IPosition {
    title: string,
    location: string,
    icon: string,
    details: IDetail[]
};

const positions = [] as IPosition[];

let position = {
    title: 'React Web Developer',
    location: 'Remote',
    icon: 'laptop_mac',
    details: []
} as IPosition;

position.details.push({text: `
    Use React functional components to query external sources
    while displaying a loading state. Work with both context
    and local state. Design responsive pages for desktop and
    mobile platforms.
`});
position.details.push({text: 'Skills needed', header: true})
position.details.push({text: `
    React, React Hooks, git, node, JavaScript, eslint, issue tracking
`})
position.details.push({text: 'Skills preferred', header: true})
position.details.push({text: `
Typescript, Angular, Redux, Redux-Saga, sass/scss, webpack, JIRA,
GitHub, HTML Canvas, Agile Development
`})
positions.push(position);
// -----------------------------
position = {
    title: 'Developers',
    location: 'Remote',
    icon: 'laptop_mac',
    details: []
} as IPosition;

position.details.push({text: `
  Proficient in Java, React, Python, Angular, Kafka...
`});
positions.push(position);

export default positions;