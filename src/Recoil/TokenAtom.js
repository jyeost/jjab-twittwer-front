import { atom, selector } from "recoil";

export const TokenAtom = atom({
    key: "TokenAtom" ,

    // todo : 나중에 고치기
    // default: undefined
    default : true
});

export const isLoginSelector = selector({
    key: 'isLoginSelector',
    get: ({get}) => !!get(TokenAtom)
});