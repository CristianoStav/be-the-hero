/* eslint-disable class-methods-use-this */
import connection from '../database/connection';

export default class ProfileController {
  async index(req, res) {
    const ong_id = req.headers.authorization;

    const incidents = await connection('incidents')
      .select('*')
      .where('ong_id', ong_id);

    return res.status(200).json(incidents);
  }
}
