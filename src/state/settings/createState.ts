import IState from "./IState";
const TM = `\u{2122}`;
const Copyright = "\u{a9}";

const createState = (): IState => ({
  name: `Code Jamboree${TM}`,
  tagline: "Consulting for Software as a Service (SaaS)",
  license: `${Copyright} Copyright 2022, Code Jamboree LLC`,
  contactName: ["Lewis E. Moten, Member", "Code Jamboree LLC"],
  contactEmail: ["hello", "codejamboree.com"],
  contactPhone: [
    {
      type: "mobile",
      number: "+1 (703) 261-4080",
    },
  ],
  contactLocalMail: ["PO Box 202", "Front Royal, Virginia 22630"],
  contactMail: [
    "1108 East Main Street",
    "Suite 906 #2194",
    "Richmond, Virginia 23219",
  ],
});

export default createState;
