exports.seed = function(knex) {
    return knex('tasks').insert([
        {
            id: 1,
            project_id: 1,
            description: 'task desciption',
            notes: 'the task notes',
            completed: false,
        },
        {
            id: 2,
            project_id: 2, 
            description: 'task description 2',
            notes: 'the task notes 2 ',
            completed: false,
        },
        {
            id: 3,
            project_id: 3,
            description: " task description 3",
            notes: 'the task notes 3',
            completed: 'false'
        },

        {
            id: 4,
            project_id: 4,
            description: 'task desciption',
            notes: 'the task notes',
            completed: false,
        },
        {
            id: 5,
            project_id: 5,
            description: 'task desciption',
            notes: 'the task notes',
            completed: false,
        },
        {
            id: 6,
            project_id: 6,
            description: 'task desciption',
            notes: 'the task notes',
            completed: false,
        },

    ])
}