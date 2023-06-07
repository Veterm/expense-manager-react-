

class CurrencyService{
    getResource = async (url) =>{
        let res = await fetch(url);

        if(!res.ok){
            throw new Error(`Error status: ${res.status}`)
        }
        return await res.json();
    }

    getCours = () =>{
        return this.getResource("https://api.freecurrencyapi.com/v1/latest?apikey=ZxywueOOwYqc3NmZbAOtVzfVBqhiwwmQyucoZEUI");
    }
}

export default CurrencyService;