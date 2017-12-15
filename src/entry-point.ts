

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

export function testFunc(whatToParrot: string): string {
    return whatToParrot;
}