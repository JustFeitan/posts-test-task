import { postsReducer } from "@store/reducers/postsSlice";
import { postsSelector } from "@store/reducers/postsSlice/selectors/postsSelector";

describe("posts selectors test", function () {
    test("with empty state", () => {
        expect(postsSelector({})).toEqual(null);
    });

    test("with filled state", () => {
        const postsReducerMock: ReturnType<typeof postsReducer> = {
            posts: [],
            isLoading: false,
            error: "",
            pagesArray: [],
        };
        expect(postsSelector({ postsReducer: postsReducerMock })).toEqual(
            postsReducerMock.posts
        );
    });
});
