import PostsService from "../Service/PostsService";
import LocalRepository from "../../../Local/Repository/LocalRepository";
import {makeAutoObservable} from 'mobx';

export class PostsStore {
    posts = [];
    isLoading = false;
    postsService;
    localRepository;

    constructor() {
        this.postsService = new PostsService();
        this.localRepository = new LocalRepository('Posts');
        makeAutoObservable(this);
    };

    getPosts = () => {
        this.setIsLoading(true);

        this.postsService
            .getPosts()
            .then(result => {
                this.localRepository.setItems(result);
                this.setPosts(result);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                this.setIsLoading(false);
            });
    };

    setIsLoading = isLoading => {
        this.isLoading = isLoading;
    }

    setPosts = posts => {
        this.posts = posts;
    }

    removePostsFromLocal = async () => {
        this.localRepository.removeAll();
        this.setPosts(await this.localRepository.getItems() ?? []);
    };
}