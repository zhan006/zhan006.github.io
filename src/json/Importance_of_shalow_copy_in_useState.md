# Importance of shalow copy in useState

I rencently encounter a problem during a development of website using React.
An API request was be doing inside a useEffect clause. Whenever a new data is received, it will be append to the state which is an array by a dispatcher.
```
let [cryptos,setCryptos] = useState([])
useEffect(()=>{
    async function getData(){
      const [err,res] = await getCryptoTypes()
      if(err) alert(err)
      if(res){
        console.log(res.data.data)
        let cryps = []
        for(let c of res.data.data){
          const [e,r] = await getCrypto(c)
          if(e) console.log(e)
          else{
            cryps.push(r.data.data)
            setCryptos(cryps)

          }
        }
        cryps.sort((a,b)=>b.market_cap-a.market_cap)
        // setCryptos(cryps)
        
      }
    }
    getData();
  },[])
```
However, the page will not be render the data pieace by pieace as expected, it only render one the first pieace of data received.

During debugging, the api request worked well, but the page was only rendered once even though we called setCryptos many times.

It is because setCryptos does not neccesarily re-render the page whenever be called. It compare the new state will original one, if not equal it re-renders the page. In this case, we call cryps.push(data) to update this array. However, the array cryps is still the one it was. It is same like
```
let a=[1]
let b = a
a.push(2)
a === b // true
```
React compare original state with the new state, cryptos === cryps, and find they are the same, so it does not re-render the page.

In conclution, we need to create a new copy of the orginal data when calling a dispatcher
```
setCryptos([...cryps])
```

