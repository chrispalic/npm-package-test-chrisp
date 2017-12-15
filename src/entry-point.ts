

export class EntryPoint {
/**
 * This is a basic parrot function
 *
 * @param {string} whatToParrot
 * @returns {string}
 * @memberof EntryPoint
 */
public entryPoint (whatToParrot: string): string {
        const text = Object.assign({}, whatToParrot);
        return text;
    }
}

export function TestFunc(whatToParrot: string): string {
    return whatToParrot;
}

export class EntryPoint2 {
    constructor() {}

    public entryPoint (whatToParrot: string): string {
        return whatToParrot;
    }
}

export interface IFileType {
    name: string;
    contents: any;
    fileDate?: string;
}
