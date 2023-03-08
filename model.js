const model = {
    /* App-tilstand */
    app: {
        currentPage: 'userPoll', // userPoll, userPollComplete, adminLogin, adminActive, adminDraft, adminCompleted, 
    },

    /* Input */

    inputs: {

        createNewPoll: {                       //ny meningsmåling
            newPollId: 1,
            pollTitle: '',
            pollInfo: '',
            pollState: 'draft',
            pollDeadline: '12/12/12',
            pollQuestions: [                   // new object for each question
                {
                    pollQuestionId: 1,
                    pollQuestionTitle: '',
                    pollQuestionInfo: '',
                    isOblig: true,
                    isMultipleChoice: false,
                    pollAnswerOptions: [       // new object for each answer
                        {
                            pollAnswerId: 1,
                            pollAnswerText: '',
                            isTextInput: false,
                        },
                    ]
                }],
        },
        otherField: '',
        adminLogin: {
            username: 'admin',
            password: 'admin',
        },
    },


    /* Data */

    activePolls: [],                       //aktive meningsmålinger
    finishedPolls: [],                     //utførte meningsmålinger
    drafts: [],                            //utkast
    submissions: [
        {
            submissionNr: 1,
            completiondate: '',
            polls: [],
        },
        {
            submissionNr: 2,
            completiondate: '',
            polls: [],
            
        },
    ],

    polls: [
        {
            pollId: 1,
            pollTitle: 'Test Poll',
            pollInfo: 'dette er kun en testpoll',
            pollState: 'active',                         // draft, active, complete
            pollDeadline: '12/12/12',
            pollQuestions: [                            // new object for each question
                {
                    pollQuestionId: 1,
                    pollQuestionTitle: 'How many teeth does a human have?',
                    pollQuestionInfo: 'asdfg',
                    wasAnswered: true,
                    isOblig: true,
                    isMultipleChoice: false,
                    pollAnswerOptions: [                // new object for each answer
                        {
                            pollAnswerId: 1,
                            pollAnswerText: 'lala',
                            isTextInput: true,
                            countAnswered: 0,
                        },
                        {
                            pollAnswerId: 2,
                            pollAnswerText: 'lorem',
                            isTextInput: false,
                            countAnswered: 3,
                        },
                        {
                            pollAnswerId: 3,
                            pollAnswerText: 'lorem',
                            isTextInput: true,
                            countAnswered: 6,
                        },
                    ]
                },
                {
                    pollQuestionId: 2,
                    pollQuestionTitle: 'Test',
                    pollQuestionInfo: 'asdfg',
                    wasAnswered: true,
                    isOblig: true,
                    isMultipleChoice: false,
                    pollAnswerOptions: [                // new object for each answer
                        {
                            pollAnswerId: 1,
                            pollAnswerText: 'lala',
                            isTextInput: true,
                            countAnswered: 4,
                        },
                        {
                            pollAnswerId: 2,
                            pollAnswerText: 'lorem',
                            isTextInput: true,
                            countAnswered: 10,
                        },
                        {
                            pollAnswerId: 3,
                            pollAnswerText: 'lorem',
                            isTextInput: true,
                            countAnswered: 8,
                        },
                    ]
                }],

        },
    ]
}