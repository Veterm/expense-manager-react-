

class CurrencyService{
    getResource = async (url) =>{
        let res = await fetch(url);

        if(!res.ok){
            throw new Error(`Error status: ${res.status}`)
        }
        return await res.json();
    }

    getCours = () =>{
        return this.getResource("http://data.fixer.io/api/latest?access_key=dd74c1b5992e382bfa4715f381d3e460");
    }
}

export default CurrencyService;