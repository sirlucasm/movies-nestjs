import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const isProduction = () => process.env.NODE_ENV != 'development';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',

  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,

  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  autoLoadEntities: true,

  migrationsTableName: 'migrations',
  migrations: [__dirname + '/../database/migrations/*.ts'],

  ssl: isProduction(),

  synchronize: true,
}


export { typeOrmConfig };
