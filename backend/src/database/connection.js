import knex from 'knex';
import configs from '../../knexfile';

const conn = knex(configs.development);

export default conn;
