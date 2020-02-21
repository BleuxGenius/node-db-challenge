exports.seed = function(knex) {
    return knex('resources').insert([
        {
            id: 1, 
            name: 'Danielle Blackwell',
            description: 'freelance dev, and soon to be hired fullstack dev'
        },
        {
            id: 2,
            name: 'MacBook',
            description: 'tool for freelance work'
        },
        {
            id: 3,
            name: 'Mac Desktop',
            description: 'second screen usage for client projects'
        }
    ])

}