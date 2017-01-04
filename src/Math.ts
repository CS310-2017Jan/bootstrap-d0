/**
 * This is the main programmatic entry point for D0.
 */

import Log from "./Util";

interface IMath {
    add(urls: string[]): Promise<number>;
    multiply(urls: string[]): Promise<number> ;
}

export default class Math implements IMath {
    constructor() {
        Log.trace('Math::init()');
    }

    add(urls: string[]): Promise<number> {
        return new Promise(function (fulfill, reject) {
            // TODO: implement
            fulfill(0);
        });
    }

    multiply(urls: string[]): Promise<number> {
        return new Promise(function (fulfill, reject) {
            // TODO: implement
            fulfill(0)
        });
    }
}
