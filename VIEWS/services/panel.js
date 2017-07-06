/*************************************************************************\
    Author: Erick Meyer
    Description: The 'panelService' is our highway for communication for
    pages and modules.
\*************************************************************************/
app.service('panelService', function(){
    // Allows for us to reference ourselves in functions that we define.
    var self = this;
    // Type of the panel that we are dealing with.
    this.type = '';
    // Markup received from a panel.
    this.markup = '';
    // The JSON representation of a panel.
    this.jsonObject = {
        view: 'list',
        id: '23',
        name: 'Assignment 3',
        moduleList: [
            {
                'id': '45',
                'type': 'module',
                'title':'what is 2+2?',
                'ans':['super', '4'],
                'sub':['Select an answer.'],
                'sel':[]
            },
            {
                'id': '32',
                'type': 'module',
                'title':'Yeet? Yeet.',
                'sub':['This is subtext', 'not to be confused with answers.'],
                'sel':[]
            }
        ]
    };
});