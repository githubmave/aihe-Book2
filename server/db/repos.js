const connection = require('./connection')

function listRepos (db = connection) {
  return db('repos').select()
}

function getRepoById(id, db = connection){
      return db('repos') 
             .select()  
             .where('id',id)                           
             .first()

}


function addRepo (newRepo, db = connection){
  // console.log("Fr addRepo db newRepo",newRepo)
   
    return db('repos')
    .insert(newRepo)
    .then (ids => {
     // console.log("Fr. addRepo db ,21",ids[0])
       return getRepoById(ids[0])
    })
}


module.exports = {
  listRepos,
  getRepoById,
  addRepo
}
