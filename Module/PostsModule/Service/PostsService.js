import PostsRepository from "../Repository/PostsRepository";
import Post from "../Model/Post";

export default class PostsService {
    postsRepository;

    constructor() {
        this.postsRepository = new PostsRepository();
    }

    getPosts = async () => {
        const res = await this.postsRepository.getPosts();

        return res.data.slice(0, 10).map(item =>
            new Post(item.id, item.title, item.body)
        );
    };
}