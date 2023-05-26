import {postsSelector} from "@store/reducers/postsSlice/selectors/postsSelector";
import {userSelector} from "@store/reducers/userSlice/selectors/userSelector";
import {userReducer} from "@store/reducers/userSlice";

describe('user selectors test', function () {
    test('with empty state', () => {
        expect(userSelector({})).toEqual(null)
    })

    test('with filled state', () => {
        const userReducerMock: ReturnType<typeof userReducer> = {
            user: null,
            isLoading: false,
            error: null
        }
        expect(postsSelector({userReducer: userReducerMock})).toEqual(userReducerMock.user)
    })
});
