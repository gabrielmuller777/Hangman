import axios from 'axios'

const url = 'http://localhost:3000/api/queries'

class queryService {
    //Get
    static getData(client) {
        return new Promise ((resolve,reject) => {
            axios.get(url, {
                params: client
            }).then((res) => {
                const data = res.data;
                resolve(
                    data.map(log => ({
                        ...log,
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }
}

export default queryService