import IMediaSlice from "./IMediaSlice";
// Icons from https://devicon.dev
const createMediaState = (): IMediaSlice => ({
  allIds: ["facebook", "twitter", "linkedIn", "gitHub", "npm"],
  byId: {
    facebook: {
      id: "facebook",
      name: "Facebook",
      icon: "facebook",
      username: "@codejamboree",
      url: "https://www.facebook.com/codejamboree",
    },
    twitter: {
      id: "twitter",
      name: "Twitter",
      icon: "twitter",
      username: "@CodeJamboree",
      url: "https://twitter.com/CodeJamboree",
    },
    linkedIn: {
      id: "linkedIn",
      name: "LinkedIn",
      icon: "linkedin",
      username: "@code-jamboree",
      url: "https://www.linkedin.com/company/code-jamboree/",
    },
    gitHub: {
      id: "gitHub",
      name: "GitHub",
      icon: "github",
      username: "CodeJamboree",
      url: "https://github.com/CodeJamboree",
    },
    npm: {
      id: "npm",
      name: "npm",
      icon: "npm",
      username: "@codejamboree",
      url: "https://www.npmjs.com/org/codejamboree",
    },
  },
});

export default createMediaState;
