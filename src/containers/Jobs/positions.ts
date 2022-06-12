// icons can be found at https://devicon.dev/


interface IDetail {
    header?: boolean,
    text: string,
    icons?: string[]
}
interface IPosition {
    title: string,
    location: string,
    icon: string,
    details: IDetail[]
};

const positions = [] as IPosition[];

let details = [] as IDetail[];
let position = {
    title: 'React Web Developer',
    location: 'Remote',
    icon: 'laptop_mac',
    details
} as IPosition;

details.push({
    text: `
    Use React functional components to query external sources
    while displaying a loading state. Work with both context
    and local state. Design responsive pages for desktop and
    mobile platforms. Write unit tests to confirm features
    work and are not broken in future development. Document
    components using markdown. Build packages with Webpack
    using NodeJS and deploy to NPM. Work in an agile/scrum
    environment.
`});
details.push({
    text: 'Skills needed', header: true})
details.push({
    text: `
    JavaScript, React, React Hooks, Git, Node, NPM, Eslint,
    issue tracking, unit testing, Markdown, HTML, CSS
`, icons: [
    'javascript',
    'react',
    'git',
    'nodejs',
    'npm',
    'eslint',
    'markdown',
    'html5',
    'css3'
]
})
details.push({
    text: 'Skills desired', header: true
})
details.push({
    text: `
    Typescript, Angular, Redux, Redux-Saga, sass, Webpack,
    JIRA, GitHub, HTML Canvas, Agile Development, Jest, Jasmine,
    Jenkins
`, icons: [
    'typescript',
    'angularjs',
    'redux',
    'sass',
    'webpack',
    'jira',
    'github',
    'jest',
    'jasmine',
    'jenkins'
]})
positions.push(position);
// -----------------------------
position = {
    title: 'Developers',
    location: 'Remote',
    icon: 'laptop_mac',
    details: []
} as IPosition;

position.details.push({
    text: `
    We have a few various projects where we need developers
    proficient in Java, React, Python, Angular, Kafka, Go, AWS...
`, icons: [
    'java', 'react', 'python', 'angularjs', 'apachekafka',
    'go', 'amazonwebservices'
]});
positions.push(position);

export default positions;