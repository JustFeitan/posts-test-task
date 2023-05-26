import {UserState} from "@store/reducers/userSlice/userSlice";
import {User} from "@models";
import {userActions, userReducer} from "@store/reducers/userSlice/index";


describe('user slice tests', () => {
    let initialUserSate: UserState;
    let userMock: User;
    beforeAll(() => {
        initialUserSate = {
            user: null,
            isLoading: false,
            error: null
        
        }
        userMock = JSON.parse('{\n' +
            '            "id": 1,\n' +
            '            "name": "Leanne Graham",\n' +
            '            "username": "Bret",\n' +
            '            "email": "Sincere@april.biz",\n' +
            '            "address": {\n' +
            '            "street": "Kulas Light",\n' +
            '                "suite": "Apt. 556",\n' +
            '                "city": "Gwenborough",\n' +
            '                "zipcode": "92998-3874",\n' +
            '                "geo": {\n' +
            '                "lat": "-37.3159",\n' +
            '                    "lng": "81.1496"\n' +
            '            }\n' +
            '        },\n' +
            '            "phone": "1-770-736-8031 x56442",\n' +
            '            "website": "hildegard.org",\n' +
            '            "company": {\n' +
            '            "name": "Romaguera-Crona",\n' +
            '                "catchPhrase": "Multi-layered client-server neural-net",\n' +
            '                "bs": "harness real-time e-markets"\n' +
            '        }\n' +
            '        }')
    })

    test('should return initial state', () => {
        expect(userReducer(undefined, {type: undefined}))
            .toEqual(initialUserSate)
    })

    test('should handle setting user loading', () => {
        expect(userReducer(initialUserSate, userActions.setUserLoading))
            .toEqual({...initialUserSate, isLoading: true})
    })

    test('should handle setting user', () => {
        expect(userReducer(initialUserSate, userActions.setUser(userMock)))
            .toEqual({...initialUserSate, user: userMock})
    })

    test('should handle setting user error', () => {
        expect(userReducer(initialUserSate, userActions.setUserError('Error')))
            .toEqual({...initialUserSate, error: 'Error'})
    })

    test('should execute getUser for trigger saga', () => {
        expect(userReducer(initialUserSate, userActions.getUser(1))).toEqual(initialUserSate)
    })

    afterAll(() => {
        jest.clearAllMocks()
    })
})
