let data = [
    {
        name : 'Matero',
        age : '30'
    },
    {
        name : 'Sarah',
        age : '28'
    },
    {
        name : 'John',
        age : '20'
    },
    {
        name : 'Tim',
        age : '27'
    },
    {
        name : 'Sam',
        age : '22'
    },
    {
        name : 'Joey',
        age : '34' 
    }
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' Years Old' +'</div>';
});

info.innerHTML = details.join('\n');

