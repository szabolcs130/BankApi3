https://www.mongodb.com/docs/mongodb-shell/
cmd mongosh
--> Connecting to:          mongodb://127.0.0.1:27017/? // hasznalt port a mongodbnél
Ezt a BankApi-->appsettings.json-->
{
  "bankDatabaseSettings": {
    "ConnectionString": "mongodb://localhost:27017", //itt allitod be
    "DatabaseName": "bank",
    "szemelyCollectionName": "szemely"
  },

test> use bank
switched to db bank
bank> db.createCollection('szemely')
{ ok: 1 }
bank> db.szemely.insertMany([{"nev":"Alma","szamla":100,"tilt":false},{"nev":"Korte","szamla":200,"tilt":true},{"nev":"Eper","szamla":300,"tilt":false}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6733343f89a53c5ecd0d8190'),
    '1': ObjectId('6733343f89a53c5ecd0d8191'),
    '2': ObjectId('6733343f89a53c5ecd0d8192')
  }
}
bank> db.szemely.find().pretty()
[
  {
    _id: ObjectId('6733343f89a53c5ecd0d8190'),
    nev: 'Alma',
    szamla: 100,
    tilt: false
  },
  {
    _id: ObjectId('6733343f89a53c5ecd0d8191'),
    nev: 'Korte',
    szamla: 200,
    tilt: true
  },
  {
    _id: ObjectId('6733343f89a53c5ecd0d8192'),
    nev: 'Eper',
    szamla: 300,
    tilt: false
  }
]
bank> 


BankApi indit --> https://localhost:7019/swagger/index.html
apielersz mappat xampp-->htdocs mappaba rakni 
apielersz--> js mappa: api eleres url: https://localhost:7019/api/szemely //--> portszam egyezzen meg az api portjaval!
xampp indit
