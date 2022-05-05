function getAdmins(map) {
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;    
}

const usuarios = new Map();

usuarios.set('Jesus', 'Admin');
usuarios.set('Victor', 'Admin');
usuarios.set('Brenda', 'Admin');
usuarios.set('Fox', 'Usuer');


console.log(getAdmins(usuarios));

