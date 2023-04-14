const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: process.env.elasticPortUrl})
  

const search= async (req, res) => {
  try {
    const { q } = req.query;
    console.log(q)
    const searchResult = await client.search({
      index: "users",
    //   type:"application/json",
      body: {
        query: {
          match: {
            name: {
              query: q
            }
          }
        }
      }
    });


    // res.setHeader("")



    const hits = searchResult.body.hits.hits.map(hit => hit._source);
    res.status(200).send({status:true ,data:hits,length:hits.length});
  } catch (error) {
    console.error(error);
    res.status(500).send({status:false,error:error.message});
  }
}


module.exports={search}


