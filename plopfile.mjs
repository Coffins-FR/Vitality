const CHOICES = ["component", "container", "page"];

export default function (plop) {
  plop.setGenerator("Generate files with correct file organisation", {
    description: "Application file generation",
    prompts: [
      {
        type: "list",
        name: "fileType",
        messages: "What kind of folder you want to generate ?",
        choices: CHOICES,
      },
      {
        type: "input",
        name: "name",
        messages: "Name of the component, page or container",
      },
    ],
    actions: (data) => {
      data.folder = "";
      data.layout = "centered";
      switch (data.fileType) {
        case "component":
          data.folder = "components";

          break;
        case "container":
          data.folder = "containers";
          break;
        case "page":
          data.folder = "pages";
          data.layout = "fullscreen";
          break;

        default:
          data.folder = "components";
      }

      const actions = [
        {
          type: "add",
          path: "src/{{folder}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
          templateFile: "./templates/plop/components.tsx.hbs",
          skipIfExists: true,
        },
        {
          type: "add",
          path: "src/{{folder}}/{{pascalCase name}}/{{pascalCase name}}.stories.ts",
          templateFile: "./templates/plop/components.stories.ts.hbs",
          skipIfExists: true,
        },
        {
          type: "add",
          path: "src/{{folder}}/{{pascalCase name}}/index.tsx",
          templateFile: "./templates/plop/index.ts.hbs",
          skipIfExists: true,
        },
      ];

      return actions;
    },
  });
}
