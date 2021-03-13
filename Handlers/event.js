const { readdirSync } = require("fs")

module.exports = (client) => {
    const load = () => {    
        const events = readdirSync(`../Events/`).filter(file => file.endsWith('.js'));
        for (let file of events) {
            const evt = require(`../Events/${file}`);
            let eName = file.split('.')[0];
            client.on(eName, evt.bind(null, client));
          };
        };
        load()
};
