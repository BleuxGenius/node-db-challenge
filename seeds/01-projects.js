exports.seed = function(knex) {
    return knex('projects').insert([
        {
            id: 1,
            name: 'DataBase',
            description: 'Databases desc',
            completed: false,
        },

        {
            id: 2,
            name: 'Node',
            description: 'Node desc',
            completed: false,
        },

        {
            id: 3,
            name: 'React',
            description: 'React desc',
            completed: false,
        },

        {
            id: 4,
            name: 'SQL',
            description: 'SQL desc',
            completed: true
        },
    ]);
};