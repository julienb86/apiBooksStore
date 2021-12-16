import {MigrationInterface, QueryRunner} from "typeorm";

export class BooksTableAndMappingUser1639688937987 implements MigrationInterface {
    name = 'BooksTableAndMappingUser1639688937987'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`books\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`author\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`releasedDate\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`books_users_user\` (\`booksId\` varchar(36) NOT NULL, \`userId\` varchar(36) NOT NULL, INDEX \`IDX_3426747a74c2dbc56eca49f424\` (\`booksId\`), INDEX \`IDX_9a485fc4d7256e0674452cf6f9\` (\`userId\`), PRIMARY KEY (\`booksId\`, \`userId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`books_users_user\` ADD CONSTRAINT \`FK_3426747a74c2dbc56eca49f4245\` FOREIGN KEY (\`booksId\`) REFERENCES \`books\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`books_users_user\` ADD CONSTRAINT \`FK_9a485fc4d7256e0674452cf6f99\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`books_users_user\` DROP FOREIGN KEY \`FK_9a485fc4d7256e0674452cf6f99\``);
        await queryRunner.query(`ALTER TABLE \`books_users_user\` DROP FOREIGN KEY \`FK_3426747a74c2dbc56eca49f4245\``);
        await queryRunner.query(`DROP INDEX \`IDX_9a485fc4d7256e0674452cf6f9\` ON \`books_users_user\``);
        await queryRunner.query(`DROP INDEX \`IDX_3426747a74c2dbc56eca49f424\` ON \`books_users_user\``);
        await queryRunner.query(`DROP TABLE \`books_users_user\``);
        await queryRunner.query(`DROP TABLE \`books\``);
    }

}
