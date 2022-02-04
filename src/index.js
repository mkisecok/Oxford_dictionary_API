require('dotenv').config();
const axios=require('axios');

const[node,script,...args]=process.argv;

const app_key=process.env.API_KEY;
const app_id=process.env.API_ID;
const word=args[0];
const baseURL= `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word}`;
const headers=
{
    "Accept": "application/json",
    "app_id": app_id,
    "app_key": app_key 
};

axios.get(baseURL,{headers})
    .then(res=>{

// for the clear code define the object structure as variable
const lexArr=res.data.results[0].lexicalEntries;


    console.log(`${res.data.word}(${lexArr[0].lexicalCategory.text})`)

         lexArr[0].entries[0].senses.forEach((define,i)=>{
         console.log( `${i+1} ${define.shortDefinitions.toString()}`
        )
     })
     console.log( `Provided by:${res.data.metadata.provider} `)
    })
.catch(err=>console.log(err))

