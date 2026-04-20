
Inacio@Mauro MINGW64 ~
$ mongosh

Current Mongosh Log ID: 69e575c9fdd6140b7b3682d0
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverS
electionTimeoutMS=2000&appName=mongosh+2.8.2
Using MongoDB:          8.2.7
Using Mongosh:          2.8.2

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/


To help improve our products, anonymous usage data is collected and sent to Mong
oDB periodically (https://www.mongodb.com/legal/privacy-policy).
You can opt-out by running the disableTelemetry() command.

------
   The server generated these startup warnings when booting
   2026-04-19T21:26:21.591-03:00: Access control is not enabled for the database
. Read and write access to data and configuration is unrestricted
------

test>

test>
(To exit, press Ctrl+C again or Ctrl+D or type .exit)
test> use loja; // Cria e seleciona o banco "loja"
db.createCollection("produtos");switched to db loja;
loja;>

loja;> db.produtos.insertMany([
{ "nome": "Notebook", "preco": 3500.00, "estoque": 10, "categoria":
| "eletronicos" },
Uncaught:
SyntaxError: Unexpected token, expected "," (2:14)

  1 | db.produtos.insertMany([
> 2 | "eletronicos" },
    |               ^
  3 |

loja;> { "nome": "Cadeira Gamer", "preco": 1200.00, "estoque": 5, "tags":
["moveis", "gamer"] },
| { "nome": "Mouse", "preco": 150.00, "estoque": 50 }
| ]);
Uncaught:
SyntaxError: Missing semicolon. (1:8)

> 1 | { "nome": "Cadeira Gamer", "preco": 1200.00, "estoque": 5, "tags":
    |         ^
  2 | { "nome": "Mouse", "preco": 150.00, "estoque": 50 }
  3 | ]);
  4 |

loja;>

loja;>

loja;> db.produtos.find()

loja;> db.produtos.find({ preco: { $gt: 1000 } })

loja;> db.produtos.find({ categoria: "eletronicos" })

loja;> db.produtos.updateOne(
 { nome: "Mouse" },
|  { $set: { preco: 180 } }
| )
MongoInvalidArgumentError: Update document requires atomic operators
loja;> db.produtos.updateOne(
loja;> db.produtos.updateOne(
|  { $set: { preco: 200 } }
| )
MongoInvalidArgumentError: Update document requires atomic operators
loja;> db.produtos.find({ categoria: "eletronicos" })

loja;> db.produtos.updateOne(
 { nome: "Mouse" },
|  { $set: { preco: 250 } }
| )
MongoInvalidArgumentError: Update document requires atomic operators
loja;> db.produtos.updateOne(
 { nome: "Mouse" },
|  { $set: { preco: 250 } }
| )
MongoInvalidArgumentError: Update document requires atomic operators
loja;>
(To exit, press Ctrl+C again or Ctrl+D or type .exit)
loja;>

Inacio@Mauro MINGW64 ~
$ use loja
bash: use: command not found

Inacio@Mauro MINGW64 ~
$ mongosh
Current Mongosh Log ID: 69e576ffcbe559bcf13682d0
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverS
electionTimeoutMS=2000&appName=mongosh+2.8.2
Using MongoDB:          8.2.7
Using Mongosh:          2.8.2

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2026-04-19T21:26:21.591-03:00: Access control is not enabled for the database
. Read and write access to data and configuration is unrestricted
------

test> use loja
switched to db loja
loja> db.produtos.find({ nome: "Mouse" })
[
  {
    _id: ObjectId('69e56d56d026fbd686e006e4'),
    nome: 'Mouse',
    preco: 180,
    estoque: 50
  }
]
loja> db.produtos.updateOne(
loja> db.produtos.updateOne(
|   { $set: { preco: 180 } }
| )
MongoInvalidArgumentError: Update document requires atomic operators
loja> db.produtos.updateOne(
  { nome: "Mouse" },
|   { $set: { preco: 250 } }
| )
MongoInvalidArgumentError: Update document requires atomic operators
loja> db
loja
loja> db.produtos.updateone({nome:"mouse"},{$set:{preco 250 }})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:50)

> 1 | db.produtos.updateone({nome:"mouse"},{$set:{preco 250 }})
    |                                                   ^
  2 |

loja>
(To exit, press Ctrl+C again or Ctrl+D or type .exit)
loja> db.produtos.updateOne(
  { nome: "Mouse" },
|   { $set: { preco: 250 } }
| )
MongoInvalidArgumentError: Update document requires atomic operators
loja> db.produtos.deleteMany({ "estoque": 0 });
{ acknowledged: true, deletedCount: 0 }
loja>
Inacio@Mauro MINGW64 ~

loja> $ mongosh
Current Mongosh Log ID: 69e575c9fdd6140b7b3682d0
Uncaught:
SyntaxError: Missing semicolon. (1:1)

> 1 | $ mongosh
    |  ^
  2 |

loja>

loja> Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&ser
verS
Uncaught:
SyntaxError: Missing semicolon. (1:10)

> 1 | Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&ser
verS
    |           ^
  2 |

loja> electionTimeoutMS=2000&appName=mongosh+2.8.2
Uncaught:
SyntaxError: Invalid left-hand side in assignment expression. (1:18)

> 1 | electionTimeoutMS=2000&appName=mongosh+2.8.2
    |                   ^
  2 |

loja> Using MongoDB:          8.2.7
Using Mongosh:          2.8.2
Uncaught:
SyntaxError: Missing semicolon. (1:5)

> 1 | Using MongoDB:          8.2.7
    |      ^
  2 |

loja>
For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

loja>

loja>

loja>

loja> To help improve our products, anonymous usage data is collected and sent to
Mong
Uncaught:
SyntaxError: Missing semicolon. (1:2)

> 1 | To help improve our products, anonymous usage data is collected and sent to
Mong
    |   ^
  2 |

loja> oDB periodically (https://www.mongodb.com/legal/privacy-policy).
You can opt-out by running the disableTelemetry() command.
Uncaught:
SyntaxError: Missing semicolon. (1:3)

> 1 | oDB periodically (https://www.mongodb.com/legal/privacy-policy).
    |    ^
  2 |

loja>
   The server generated these startup warnings when booting

loja> ------
|    2026-04-19T21:26:21.591-03:00: Access control is not enabled for the database


Uncaught:
SyntaxError: Invalid left-hand side in prefix operation. (2:3)

  1 | ------
> 2 |    2026-04-19T21:26:21.591-03:00: Access control is not enabled for the data
base
    |    ^
  3 |

loja> . Read and write access to data and configuration is unrestricted
Invalid REPL keyword
loja> ------
| test>
Uncaught:
SyntaxError: Invalid left-hand side in prefix operation. (1:4)

> 1 | ------
    |     ^
  2 | test>
  3 |

loja>

loja> test>
| (To exit, press Ctrl+C again or Ctrl+D or type .exit)
Uncaught:
SyntaxError: Unexpected token, expected "," (2:4)

  1 | test>
> 2 | (To exit, press Ctrl+C again or Ctrl+D or type .exit)
    |     ^
  3 |

loja> test> use loja; // Cria e seleciona o banco "loja"
Uncaught:
SyntaxError: Missing semicolon. (1:9)

> 1 | test> use loja; // Cria e seleciona o banco "loja"
    |          ^
  2 |

loja> db.createCollection("produtos");switched to db loja;
Uncaught:
SyntaxError: Missing semicolon. (1:40)

> 1 | db.createCollection("produtos");switched to db loja;
    |                                         ^
  2 |

loja> loja;>
Uncaught:
SyntaxError: Unexpected token (1:5)

> 1 | loja;>
    |      ^
  2 |

loja>

loja> loja;> db.produtos.insertMany([
SyntaxError: Unexpected token, expected "," (2:14)
Uncaught:
SyntaxError: Unexpected token (1:5)

> 1 | loja;> db.produtos.insertMany([
    |      ^
  2 |

loja> { "nome": "Notebook", "preco": 3500.00, "estoque": 10, "categoria":
| | "eletronicos" },
Uncaught:
SyntaxError: Missing semicolon. (1:8)

> 1 | { "nome": "Notebook", "preco": 3500.00, "estoque": 10, "categoria":
    |         ^
  2 | | "eletronicos" },
  3 |

loja> Uncaught:
|
|   1 | db.produtos.insertMany([
| > 2 | "eletronicos" },
Uncaught:
SyntaxError: Unexpected token (4:0)

  2 |
  3 |   1 | db.produtos.insertMany([
> 4 | > 2 | "eletronicos" },
    | ^
  5 |

loja>     |               ^
Uncaught:
SyntaxError: Unexpected token (1:4)

> 1 |     |               ^
    |     ^
  2 |

loja>   3 |

| loja;> { "nome": "Cadeira Gamer", "preco": 1200.00, "estoque": 5, "tags":
["moveis", "gamer"] },
Uncaught:
SyntaxError: Unexpected token (2:5)

  1 |   3 |
> 2 | loja;> { "nome": "Cadeira Gamer", "preco": 1200.00, "estoque": 5, "tags":
    |      ^
  3 |

loja> | { "nome": "Mouse", "preco": 150.00, "estoque": 50 }
| ]);
Uncaught:
SyntaxError: Unexpected token (1:0)

> 1 | | { "nome": "Mouse", "preco": 150.00, "estoque": 50 }
    | ^
  2 |

loja> Uncaught:
| SyntaxError: Missing semicolon. (1:8)

Uncaught:
SyntaxError: Missing semicolon. (2:20)

  1 | Uncaught:
> 2 | SyntaxError: Missing semicolon. (1:8)
    |                     ^
  3 |

loja> > 1 | { "nome": "Cadeira Gamer", "preco": 1200.00, "estoque": 5, "tags":
    |         ^
Uncaught:
SyntaxError: Unexpected token (1:0)

> 1 | > 1 | { "nome": "Cadeira Gamer", "preco": 1200.00, "estoque": 5, "tags":
    | ^
  2 |

loja>   2 | { "nome": "Mouse", "preco": 150.00, "estoque": 50 }
  3 | ]);
2
loja>   4 |
|
| loja;>

Uncaught:
SyntaxError: Unexpected token (3:5)

  1 |   4 |
  2 |
> 3 | loja;>
    |      ^
  4 |

loja> loja;>
Uncaught:
SyntaxError: Unexpected token (1:5)

> 1 | loja;>
    |      ^
  2 |

loja>
loja;> db.produtos.find()

loja>

loja> loja;> db.produtos.find({ preco: { $gt: 1000 } })
Uncaught:
SyntaxError: Unexpected token (1:5)

> 1 | loja;> db.produtos.find({ preco: { $gt: 1000 } })
    |      ^
  2 |

loja>
loja;> db.produtos.find({ categoria: "eletronicos" })

loja>

loja> loja;> db.produtos.updateOne(
Uncaught:
SyntaxError: Unexpected token (1:5)

> 1 | loja;> db.produtos.updateOne(
    |      ^
  2 |

loja>  { nome: "Mouse" },
|  { $set: { preco: 180 } }
| | )
Uncaught:
SyntaxError: Unexpected token (1:18)

> 1 |  { nome: "Mouse" },
    |                   ^
  2 | | )
  3 |

loja> MongoInvalidArgumentError: Update document requires atomic operators
loja;> db.produtos.updateOne(
Uncaught:
SyntaxError: Missing semicolon. (1:33)

> 1 | MongoInvalidArgumentError: Update document requires atomic operators
    |                                  ^
  2 |

loja> loja;> db.produtos.updateOne(
|  { $set: { preco: 200 } }
Uncaught:
SyntaxError: Unexpected token (1:5)

> 1 | loja;> db.produtos.updateOne(
    |      ^
  2 |

loja> | )
Uncaught:
SyntaxError: Unexpected token (1:0)

> 1 | | )
    | ^
  2 |

loja> MongoInvalidArgumentError: Update document requires atomic operators
loja;> db.produtos.find({ categoria: "eletronicos" })
Uncaught:
SyntaxError: Missing semicolon. (1:33)

> 1 | MongoInvalidArgumentError: Update document requires atomic operators
    |                                  ^
  2 |

loja>
loja;> db.produtos.updateOne(

loja>  { nome: "Mouse" },
| |  { $set: { preco: 250 } }
Uncaught:
SyntaxError: Unexpected token (1:18)

> 1 |  { nome: "Mouse" },
    |                   ^
  2 | |  { $set: { preco: 250 } }
  3 |

loja> | )
Uncaught:
SyntaxError: Unexpected token (1:0)

> 1 | | )
    | ^
  2 |

loja> MongoInvalidArgumentError: Update document requires atomic operators
loja;> db.produtos.updateOne(
Uncaught:
SyntaxError: Missing semicolon. (1:33)

> 1 | MongoInvalidArgumentError: Update document requires atomic operators
    |                                  ^
  2 |

loja>  { nome: "Mouse" },
| |  { $set: { preco: 250 } }
| )
Uncaught:
SyntaxError: Unexpected token (1:18)

> 1 |  { nome: "Mouse" },
    |                   ^
  2 | |  { $set: { preco: 250 } }
  3 |

loja> MongoInvalidArgumentError: Update document requires atomic operators
loja;>
Uncaught:
SyntaxError: Missing semicolon. (1:33)

> 1 | MongoInvalidArgumentError: Update document requires atomic operators
    |                                  ^
  2 |

loja> (To exit, press Ctrl+C again or Ctrl+D or type .exit)
loja;>
Uncaught:
SyntaxError: Unexpected token, expected "," (1:4)

> 1 | (To exit, press Ctrl+C again or Ctrl+D or type .exit)
    |     ^
  2 |

loja>
Inacio@Mauro MINGW64 ~

loja> $ use loja

Uncaught:
SyntaxError: Missing semicolon. (1:1)

> 1 | $ use loja
    |  ^
  2 |

loja> bash: use: command not found
Uncaught:
SyntaxError: Missing semicolon. (1:18)

> 1 | bash: use: command not found
    |                   ^
  2 |

loja> Inacio@Mauro MINGW64 ~
Current Mongosh Log ID: 69e576ffcbe559bcf13682d0
Uncaught:
SyntaxError: Missing semicolon. (1:6)

> 1 | Inacio@Mauro MINGW64 ~
    |       ^
  2 |

loja> $ mongosh
Uncaught:
SyntaxError: Missing semicolon. (1:1)

> 1 | $ mongosh
    |  ^
  2 |

loja> Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&ser
verS
Using Mongosh:          2.8.2
Uncaught:
SyntaxError: Missing semicolon. (1:10)

> 1 | Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&ser
verS
    |           ^
  2 |

loja> electionTimeoutMS=2000&appName=mongosh+2.8.2
Uncaught:
SyntaxError: Invalid left-hand side in assignment expression. (1:18)

> 1 | electionTimeoutMS=2000&appName=mongosh+2.8.2
    |                   ^
  2 |

loja> Using MongoDB:          8.2.7
Uncaught:
SyntaxError: Missing semicolon. (1:5)

> 1 | Using MongoDB:          8.2.7
    |      ^
  2 |

loja>
test> use loja

loja> For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/
Uncaught:
SyntaxError: Missing semicolon. (1:3)

> 1 | For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/
    |    ^
  2 |

loja>

loja> ------
|    The server generated these startup warnings when booting
Uncaught:
SyntaxError: Invalid left-hand side in prefix operation. (1:4)

> 1 | ------
    |     ^
  2 |    The server generated these startup warnings when booting
  3 |

loja>    2026-04-19T21:26:21.591-03:00: Access control is not enabled for the data
base
Uncaught:
SyntaxError: Identifier directly after number. (1:13)

> 1 |    2026-04-19T21:26:21.591-03:00: Access control is not enabled for the data
base
    |              ^
  2 |

loja> . Read and write access to data and configuration is unrestricted
Invalid REPL keyword
loja> ------
|
| switched to db loja
|   { $set: { preco: 180 } }
Uncaught:
SyntaxError: Invalid left-hand side in prefix operation. (1:4)

> 1 | ------
    |     ^
  2 |
  3 | switched to db loja
  4 |

loja> loja> db.produtos.find({ nome: "Mouse" })
ReferenceError: loja is not defined
loja> [
|   {
|     _id: ObjectId('69e56d56d026fbd686e006e4'),
|     nome: 'Mouse',
|     preco: 180,
|     estoque: 50
|   }
| ]
[
  {
    _id: ObjectId('69e56d56d026fbd686e006e4'),
    nome: 'Mouse',
    preco: 180,
    estoque: 50
  }
]
loja> loja> db.produtos.updateOne(
| loja> db.produtos.updateOne(
| | )
loja
Uncaught:
SyntaxError: Unexpected token (3:0)

  1 | loja> db.produtos.updateOne(
  2 | loja> db.produtos.updateOne(
> 3 | | )
    | ^
  4 |

loja> MongoInvalidArgumentError: Update document requires atomic operators
Uncaught:
SyntaxError: Missing semicolon. (1:33)

> 1 | MongoInvalidArgumentError: Update document requires atomic operators
    |                                  ^
  2 |

loja> loja> db.produtos.updateOne(
|   { nome: "Mouse" },
| |   { $set: { preco: 250 } }
Uncaught:
SyntaxError: Unexpected token (3:0)

  1 | loja> db.produtos.updateOne(
  2 |   { nome: "Mouse" },
> 3 | |   { $set: { preco: 250 } }
    | ^
  4 |

loja> | )
Uncaught:
SyntaxError: Unexpected token (1:0)

> 1 | | )
    | ^
  2 |

loja> MongoInvalidArgumentError: Update document requires atomic operators
Uncaught:
SyntaxError: Missing semicolon. (1:33)

> 1 | MongoInvalidArgumentError: Update document requires atomic operators
    |                                  ^
  2 |

loja> loja> db
ReferenceError: loja is not defined
loja> loja> db.produtos.updateone({nome:"mouse"},{$set:{preco 250 }})
  { nome: "Mouse" },
Uncaught:
SyntaxError: Unexpected token, expected "," (1:56)

> 1 | loja> db.produtos.updateone({nome:"mouse"},{$set:{preco 250 }})
    |                                                         ^
  2 |

loja> Uncaught:
| SyntaxError: Unexpected token, expected "," (1:50)
Uncaught:
SyntaxError: Missing semicolon. (2:23)

  1 | Uncaught:
> 2 | SyntaxError: Unexpected token, expected "," (1:50)
    |                        ^
  3 |

loja>

loja> > 1 | db.produtos.updateone({nome:"mouse"},{$set:{preco 250 }})
Uncaught:
SyntaxError: Unexpected token (1:0)

> 1 | > 1 | db.produtos.updateone({nome:"mouse"},{$set:{preco 250 }})
    | ^
  2 |

loja>     |                                                   ^
Uncaught:
SyntaxError: Unexpected token (1:4)

> 1 |     |                                                   ^
    |     ^
  2 |

loja>   2 |
|
| loja>
| (To exit, press Ctrl+C again or Ctrl+D or type .exit)
Uncaught:
SyntaxError: Unexpected token, expected "," (4:4)

  2 |
  3 | loja>
> 4 | (To exit, press Ctrl+C again or Ctrl+D or type .exit)
    |     ^
  5 |

loja> loja> db.produtos.updateOne(
| |   { $set: { preco: 250 } }
Uncaught:
SyntaxError: Unexpected token (2:0)

  1 | loja> db.produtos.updateOne(
> 2 | |   { $set: { preco: 250 } }
    | ^
  3 |

loja> | )
Uncaught:
SyntaxError: Unexpected token (1:0)

> 1 | | )
    | ^
  2 |

loja> MongoInvalidArgumentError: Update document requires atomic operators
Uncaught:
SyntaxError: Missing semicolon. (1:33)

> 1 | MongoInvalidArgumentError: Update document requires atomic operators
    |                                  ^
  2 |

loja> loja> db.produtos.deleteMany({ "estoque": 0 });
ReferenceError: loja is not defined
loja> { acknowledged: true, deletedCount: 0 }
| loja>
Uncaught:
SyntaxError: Missing semicolon. (1:34)

> 1 | { acknowledged: true, deletedCount: 0 }
    |                                   ^
  2 | loja>
  3 |

loja> db.dropDatabase().
|
|
| delete

loja> db.prudtos.insertMany([
| {"nome": "Celular
Uncaught:
SyntaxError: Unterminated string constant. (2:9)

  1 | db.prudtos.insertMany([
> 2 | {"nome": "Celular
    |          ^
  3 |

loja>
(To exit, press Ctrl+C again or Ctrl+D or type .exit)
loja>

Inacio@Mauro MINGW64 ~
$ mongosh
Current Mongosh Log ID: 69e57887932e9842893682d0
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSel
ectionTimeoutMS=2000&appName=mongosh+2.8.2
Using MongoDB:          8.2.7
Using Mongosh:          2.8.2

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2026-04-19T21:26:21.591-03:00: Access control is not enabled for the database.
Read and write access to data and configuration is unrestricted
------

test> use loja;
switched to db loja
loja> db.createCollection("produtos");
{ ok: 1 }
loja> db.produtos.insertMany([{ "nome": "Notebook", "preco": 3500.00, "estoque": 1
0, "categoria":
"eletronicos" },
| { "nome": "Cadeira Gamer", "preco": 1200.00, "estoque": 5, "tags":
["moveis", "gamer"] },
| { "nome": "Mouse", "preco": 150.00, "estoque": 50 }
]);|
| update
Uncaught:
SyntaxError: Unexpected token, expected "," (5:0)

  3 | { "nome": "Mouse", "preco": 150.00, "estoque": 50 }
  4 |
> 5 | update
    | ^
  6 |

loja> db.produtos.find().pretty().
| db.produtos.find({ "preco": { $gt: 1000 } }).
| db.produtos.find({
"categoria": "eletronicos" }).|
|
|
loja> db.produtos.find({
"categoria": "eletronicos" }).|
|
loja> db.produtos.updateOne(
{ "nome": "Mouse" },
| { $set: { "preco": 180.00 } }
| );
MongoInvalidArgumentError: Update document requires atomic operators
loja> db.produtos.updateOne(
loja> db.produtos.updateOne(
| { $set: { "preco": 180.00 } }
| );
MongoInvalidArgumentError: Update document requires atomic operators
loja> db.produtos.updateOne( { "nome": "Mouse" }, { $set: { "preco": 250.00 } } );

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
loja> db.produtos.deleteMany({ "estoque": 0 });
{ acknowledged: true, deletedCount: 0 }
loja> db.produtos.drop().
| db.help()
TypeError: Cannot read properties of undefined (reading 'help')
loja> db.help()

  Database Class:

    getMongo                                   Returns the current database connec
tion
    getName                                    Returns the name of the DB
    getCollectionNames                         Returns an array containing the nam
es of all collections in the current database.
    getCollectionInfos                         Returns an array of documents with
collection information, i.e. collection name and options, for the current database
.
    runCommand                                 Runs an arbitrary command on the da
tabase.
    adminCommand                               Runs an arbitrary command against t
he admin database.
    aggregate                                  Runs a specified admin/diagnostic p
ipeline which does not require an underlying collection.
    getSiblingDB                               Returns another database without mo
difying the db variable in the shell environment.
    getCollection                              Returns a collection or a view obje
ct that is functionally equivalent to using the db.<collectionName>.
    dropDatabase                               Removes the current database, delet
ing the associated data files.
    createUser                                 Creates a new user for the database
 on which the method is run. db.createUser() returns a duplicate user error if the
 user already exists on the database.
    updateUser                                 Updates the user’s profile on the d
atabase on which you run the method. An update to a field completely replaces the
previous field’s values. This includes updates to the user’s roles array.
    changeUserPassword                         Updates a user’s password. Run the
method in the database where the user is defined, i.e. the database you created th
e user.
    logout                                     Ends the current authentication ses
sion. This function has no effect if the current session is not authenticated.
    dropUser                                   Removes the user from the current d
atabase.
    dropAllUsers                               Removes all users from the current
database.
    auth                                       Allows a user to authenticate to th
e database from within the shell.
    grantRolesToUser                           Grants additional roles to a user.
    revokeRolesFromUser                        Removes a one or more roles from a
user on the current database.
    getUser                                    Returns user information for a spec
ified user. Run this method on the user’s database. The user must exist on the dat
abase on which the method runs.
    getUsers                                   Returns information for all the use
rs in the database.
    createCollection                           Create new collection
    createEncryptedCollection                  Creates a new collection with a lis
t of encrypted fields each with unique and auto-created data encryption keys (DEKs
). This is a utility function that internally utilises ClientEnryption.createEncry
ptedCollection.
    createView                                 Create new view
    createRole                                 Creates a new role.
    updateRole                                 Updates the role’s profile on the d
atabase on which you run the method. An update to a field completely replaces the
previous field’s values.

  3 | { "nome": "Mouse", "preco": 150.00, "estoque": 50 }
  4 |
> 5 | ]);
    | ^
  6 |

loja> db.produtos.insertMany([
{ "nome": "Notebook", "preco": 3500.00, "estoque": 10, "categoria":
| "eletronicos" },
Uncaught:
SyntaxError: Unexpected token, expected "," (2:14)

  1 | db.produtos.insertMany([
> 2 | "eletronicos" },
    |               ^
  3 |

loja> { "nome": "Cadeira Gamer", "preco": 1200.00, "estoque": 5, "tags":
loja> { "nome": "Cadeira Gamer", "preco": 1200.00, "estoque": 5, "tags":
| { "nome": "Mouse", "preco": 150.00, "estoque": 50 }
|
|
loja> db.produtos.insertOne({
  nome: "Cadeira Gamer",
|   preco: 1200,
|   estoque: 5,
|   tags: ["moveis", "gamer"]
})|
|
loja> db.produtos.insertOne({
  nome: "Cadeira Gamer",
|   preco: 1200,
|   estoque: 5,
|   tags: ["moveis", "gamer"]
})|
|
|
|
|
loja>
(To exit, press Ctrl+C again or Ctrl+D or type .exit)
loja> db.produtos.insertOne({
  nome: "Cadeira Gamer",
loja>

loja> db.produtos.insertOne({
  nome: "Cadeira Gamer",
|   preco: 1200,
|   estoque: 5,
|   tags: ["moveis", "gamer"]
})|
|
loja> db.produtos.insertOne({
  nome: "Cadeira Gamer",
|   preco: 1200,
|   estoque: 5,
|   tags: ["moveis", "gamer"]
| })
{
  acknowledged: true,
  insertedId: ObjectId('69e57cfc932e9842893682d1')
}
loja> db.produtos.insertOne({
  nome: "Notebook",
|   preco: 3500,
|   estoque: 10,
|   categoria: "eletronicos"
| })
{
  acknowledged: true,
  insertedId: ObjectId('69e57d32932e9842893682d2')
}
loja> db.produtos.insertOne({
  nome: "Mouse",
|   preco: 150,
|   estoque: 50
| })
{
  acknowledged: true,
  insertedId: ObjectId('69e57d3e932e9842893682d3')
}
loja> db.produtos.find().pretty().
| db.produtos.find().pretty()
TypeError: Cannot read properties of undefined (reading 'produtos')
loja> db.produtos.find().pretty().
| db.produtos.find().pretty().
loja> db.produtos.find().pretty().
| db.produtos.find()
TypeError: Cannot read properties of undefined (reading 'produtos')
loja>
(To exit, press Ctrl+C again or Ctrl+D or type .exit)
loja> db.produtos.find()
[
  {
    _id: ObjectId('69e57cfc932e9842893682d1'),
    preco: 1200,
    estoque: 5,
    tags: [ 'moveis', 'gamer' ]
  },
  {
    _id: ObjectId('69e57d32932e9842893682d2'),
    preco: 3500,
    estoque: 10,
    categoria: 'eletronicos'
  },
  { _id: ObjectId('69e57d3e932e9842893682d3'), preco: 150, estoque: 50 }
]
loja> db.produtos.find({ preco: { $gt: 1000 } })
[
  {
    _id: ObjectId('69e57cfc932e9842893682d1'),
    preco: 1200,
    estoque: 5,
    tags: [ 'moveis', 'gamer' ]
  },
  {
    _id: ObjectId('69e57d32932e9842893682d2'),
    preco: 3500,
    estoque: 10,
    categoria: 'eletronicos'
  }
]
loja> db.produtos.find({ categoria: "eletronicos" })
[
  {
    _id: ObjectId('69e57d32932e9842893682d2'),
    preco: 3500,
    estoque: 10,
    categoria: 'eletronicos'
  }
]
loja> db.produtos.updateOne(
  { nome: "Mouse" },
|   { $set: { preco: 180 } }
| )
MongoInvalidArgumentError: Update document requires atomic operators
loja> db.produtos.updateOne(
loja> db.produtos.updateOne(
|   { $set: { preco: 180 } }
| )
MongoInvalidArgumentError: Update document requires atomic operators
loja>  } }
| )
Uncaught:
SyntaxError: Unexpected token (1:1)

> 1 |  } }
    |  ^
  2 |

loja>
(To exit, press Ctrl+C again or Ctrl+D or type .exit)
loja> db.produtos.updateOne(
  { nome: "Mouse" },
|   { $set: { preco: 250 } }
| )
MongoInvalidArgumentError: Update document requires atomic operators
loja>
(To exit, press Ctrl+C again or Ctrl+D or type .exit)
loja>

Inacio@Mauro MINGW64 ~
$ use loja
bash: use: command not found

Inacio@Mauro MINGW64 ~
$ mongosh
Current Mongosh Log ID: 69e57e6d6db1371a663682d0
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSel
ectionTimeoutMS=2000&appName=mongosh+2.8.2
Using MongoDB:          8.2.7
Using Mongosh:          2.8.2

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2026-04-19T21:26:21.591-03:00: Access control is not enabled for the database.
Read and write access to data and configuration is unrestricted
------

test> loja
ReferenceError: loja is not defined
test>  use loja
switched to db loja
loja> db.produtos.updateOne({ nome: "Mouse" }, { $set: { preco: 250 } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
loja> db.produtos.deleteMany({ "estoque": 0 });
{ acknowledged: true, deletedCount: 0 }
loja>
