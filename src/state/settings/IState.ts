
export interface IPhone {
    type: string,
    number: string
}

export default interface IState {
    name: string,
    license: string,
    contactName?: string[],
    contactPhone?: IPhone[],
    contactEmail?: string[],
    contactLocalMail?: string[],
    contactMail?: string[],
    facebook?: string,
    twitter?: string,
    linkedIn?: string
};
