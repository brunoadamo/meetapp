import { Model, Sequelize } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.increment(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default User;
