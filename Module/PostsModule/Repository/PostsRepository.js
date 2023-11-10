import AxiosClient from "../../../AxiosClient/AxiosClient";

export default class PostsRepository {
    apiClient = null;

    constructor() {
        this.apiClient = new AxiosClient();
    }

    getPosts = () => {
        return this.apiClient.get({ url: '/posts' });
    };
}