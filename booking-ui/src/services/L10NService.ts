import L10NStrings from '../assets/L10NStrings';

interface IL10NService {
    get(key: string, local: string): string;
}

class L10NService implements IL10NService {
    private _local: string;

    constructor() {
        this._local = 'en';
    }

    public get(key: string, local: string = this._local): string {
        return L10NStrings[local][key];
    }
}