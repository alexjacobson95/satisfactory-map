module.exports = {
  synchronize: false,
  type: "postgres",
  entities: ["src/**/*.model.ts"],
  migrations: ["migrations/**/*.ts"],
  cli: {
    entitiesDir: "entity",
    migrationsDir: "migrations"
  }
};
