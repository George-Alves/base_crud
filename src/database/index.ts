// src/database/index.ts

import { Sequelize } from 'sequelize'

export const database = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'contabilidade',
  username: 'postgres',
  password: '2307',
	define: {
    underscored: true
  }
})