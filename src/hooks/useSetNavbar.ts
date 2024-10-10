
import {create} from 'zustand'

type Store = {
    selectedNav: "nav1" | "nav2" | "nav3",
    selected1: () => void
    selected2: () => void
    selected3: () => void
}

export const useSetNavbar = create<Store>()((set) => ({
    selectedNav: "nav1",
    selected1: () => set({selectedNav: 'nav1'}),
    selected2: () => set({selectedNav: 'nav2'}),
    selected3: () => set({selectedNav: 'nav3'})   
}))