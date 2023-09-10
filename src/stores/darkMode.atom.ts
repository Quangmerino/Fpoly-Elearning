import {atomWithStorage} from 'jotai/utils';

const darkModeAtom = atomWithStorage('theme', 'light');

export {
    darkModeAtom,
};