angular.module("myFactory", [])
    .factory('userProvider', function(){
        var users = [{id:1, name:"sompop", lastname:"kulapalanont", salary:50000, picture:"http://placehold.it/100x100"},
            {id:2, name:"pichanok", lastname:"noobparn", salary:30000, picture:"http://placehold.it/100x100"},
            {id:3, name:"unnandunn", lastname:"gucheng", salary:50000, picture:"http://placehold.it/100x100"},
            {id:4, name:"lermisme", lastname:"marketting", salary:35000, picture:"http://placehold.it/100x100"}];
        return {
            load : () => {
                if(localStorage['user-info-data'])
                    users = JSON.parse(localStorage['user-info-data']);
                return users;
            },
            save : () => {
                localStorage['user-info-data'] = JSON.stringify(users)
            },
            getUsers : () => { 
                return users;
            },
            createUser : (name, lastname, salary, picture) => {
                var now = new Date();
                users.push({
                    id:now.getTime(),
                    name:name,
                    lastname:lastname,
                    salary:salary,
                    picture:picture
                })
            },
            getUserById : id => {
                return users.find( item => {
                    return item.id == id
                })
            },
            updateUserById : (id, name, lastname, salary, picture )=> {
                //find INdex

                var index = users.findIndex( item => {
                  return   item.id == id;
                })//if no match return -1
                //check if user@index is valid
                if(users[index]){
                    users[index].name = name;
                    users[index].lastname = lastname;
                    users[index].salary = salary;
                    users.picture = picture;

                }
            },
            deleteUserById : id => {
                var index = users.findIndex( item => {
                  return   item.id == id;
                })
                users.splice(index, 1);
            }
            
        }
    })
    /*
    Create a service that can
1.Save / load data to local storage
2. getUsers()
3. createUser()
4. getUserById(id)
5. updateUserById(id, ….. )
6. deleteUserById(id)
*/