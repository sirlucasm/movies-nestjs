interface IOptions {
  host: string;
  port: string;
  tls?: {
    rejectUnauthorized: boolean;
  };
  ttl?: 15
  password?: string;
}

export const RedisOptions = () => {
  const values: IOptions = {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    ttl: 15
  };

  if (process.env.NODE_ENV !== 'development') values.tls = {
    rejectUnauthorized: false
  };

  if (process.env.REDIS_PASSWORD) values.password = process.env.REDIS_PASSWORD;
  return values;
}
