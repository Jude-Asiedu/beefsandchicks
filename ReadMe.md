Generate model

sequelize model:generate --name Post --atttributes  title:string


sequelize model:generate --name User --attributes name:string,email:string,password:string

sequelize model:generate --name Category --attributes name:string

sequelize model:generate --name Post --attributes title:string,content:text,image_url:string,categoryId:integer,userId:integer

sequelize model:generate --name Comment --attributes content:text,postId:integer,userId:integer



installing nodemon --for restarting the server when we update the code
installing jsonwebtoken for token generating and authenticating
installing bcryptjs for hashing keys and stuff
