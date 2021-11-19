var axios = require("axios").default;

class Aftermarketpl {
    constructor(options) {
        this.url = "https://json.aftermarket.pl";
        this.key = this.secret = "";
        if(options)
        {
            this.url = options["url"] ? options["url"] : this.url;
            this.key = options["key"] ? options["key"] : this.key;
            this.secret = options["secret"] ? options["secret"] : this.secret;
        }
    }

    send(command, params) {
        const instance = axios.create({
            baseURL: this.url,
            timeout: 1000,
            headers: {"Authorization": "Basic " + Buffer.from(this.key + ":" + this.secret).toString("base64")},
            responseType: 'json'
        });

        return instance.post(command, params ? params : {})
            .then(function (response) {
                var data = response.data;
                if(!data.ok)
                {
                    var error = new Error(data.error);
                    error.code = data.status;
                    error.response = data;
                    throw error;
                }
                return data.data; 
            });
    }
}

module.exports = Aftermarketpl;
