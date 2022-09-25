import {Sequelize} from 'sequelize'
import {config} from 'dotenv'

config()

/* //Conexão com db local
export const sequelize = new Sequelize('db_crud_myfirstapp', 'root', '202817', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
//}) */

////Conexão com db local
/* export const sequelize = new Sequelize({
  host: 'localhost',
  username: 'root',
  password: '202817',
  port: 3306,
  database: 'my_db',
  dialect: 'mysql',
  logging: true,
  }); */

  //Conexão com db vuvem
  export const sequelize = new Sequelize({
    host: 'i0rgccmrx3at3wv3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    username: 'llem7zkftq3to0ve',
    password: 'soupptbwzefgimyk',
    port: 3306,
    database: 'j8iq7o5hzf45bxpe',
    dialect: 'mysql',
    logging: true,
    });

  async function connectDatabase(){
    try {
      sequelize.authenticate()
      sequelize.sync({ force: false })
      console.log('connected to databese')
      
    } catch (error) {
        console.log('Fail to connect databese', error)
        
    }
  }

  connectDatabase()


