import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserMigration1639225037288 implements MigrationInterface {
  name = 'UserMigration1639225037288';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`pseudo\` varchar(255) NOT NULL, \`role\` int NOT NULL DEFAULT '0', \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
