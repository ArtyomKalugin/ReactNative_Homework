import {ClickerStore} from "../../Screen/ClickerScreen/Store/ClickerStore";
import React from "react";
import {ToDoStore} from "../../Screen/ToDoScreen/Store/ToDoStore";

class RootStore {
    clickerStore;
    toDoStore;

    constructor() {
        this.clickerStore = new ClickerStore();
        this.toDoStore = new ToDoStore();
    }
}

export const rootStore = new RootStore();
export const storesContext = React.createContext(rootStore);