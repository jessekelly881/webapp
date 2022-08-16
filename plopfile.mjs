export default (plop) => {
  plop.setGenerator("schema", {
    description: "io-ts schema",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "schema name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/lib/types/{{ camelCase name }}/index.ts",
        templateFile: ".templates/schema.hbs",
      },
    ],
  });
};
