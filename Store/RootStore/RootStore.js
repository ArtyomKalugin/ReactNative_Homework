import {ClickerStore} from "../../Module/ClickerModule/Store/ClickerStore";
import React from "react";
import {ToDoStore} from "../../Module/ToDoModule/Store/ToDoStore";
import {PostsStore} from "../../Module/PostsModule/Store/PostsStore";

class RootStore {
    clickerStore;
    toDoStore;
    postsStore;

    constructor() {
        this.clickerStore = new ClickerStore();
        this.toDoStore = new ToDoStore();
        this.postsStore = new PostsStore();
    }
}

export const rootStore = new RootStore();
export const storesContext = React.createContext(rootStore);