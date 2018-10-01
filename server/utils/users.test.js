const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'A'
        },
        {
            id:'2',
            name: 'Jane',
            room: 'B'
        },
        {
            id: '3',
            name: 'Newton',
            room: 'A'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: 123,
            name: 'newton',
            room: 'Coders'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        //assertions
        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '2';
        var userList = users.removeUser(userId);

        expect(userList.id).toBe(userId); 
        expect(userList).toNotEqual(users.users);
    });

    it('should not remove user', () => {
        var userId = '99';

        var userList = users.removeUser(userId);

        expect(userList).toNotExist();
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '99';
        var user = users.getUser(userId);

        expect(user).toNotExist();
    }); 

    it('should return names for room A', () => {
        var userList = users.getUserList('A');

        expect(userList).toEqual(['Mike', 'Newton']);
    });

    it('should return names for room B', () => {
        var userList = users.getUserList('B');

        expect(userList).toEqual(['Jane']);
    });
});

