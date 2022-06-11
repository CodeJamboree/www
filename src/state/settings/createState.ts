import IState from './IState';
const createState = (): IState => ({
    name: "Code Jamboree\u{2122}", // TM
    license: "\u{a9} Copyright 2022, Code Jamboree LLC", // (C)
    contactName: ["Lewis E. Moten, Member", "Code Jamboree LLC"],
    contactEmail: ["hello", "codejamboree.com"],
    contactPhone: [
        {
            type: "mobile",
            number: "+1 (703) 261-4080"
        }
    ],
    contactLocalMail: ["PO Box 202", "Front Royal, Virginia 22630"],
    contactMail: ["1108 East Main Street", "Suite 906 #2194", "Richmond, Virginia 23219"],
    facebook: "codejamboree",
    twitter: "CodeJamboree",
    linkedIn: "code-jamboree"
});

export default createState;