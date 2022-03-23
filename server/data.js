const Role={
    ADMIN:'admin',
    BASIC:'basic'
}
module.exports ={
    ROLE: Role,
    users: [
        {id: 1, name: 'Kyle', role: Role.ADMIN},
        {id: 2, name: 'Sally', role: Role.BASIC},
        {id: 3, name: 'Joe', role: Role.BASIC},

    ]
}