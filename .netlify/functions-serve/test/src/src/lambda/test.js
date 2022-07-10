var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/lambda/test.ts
__export(exports, {
  handler: () => handler
});

// src/lib/index.ts
var lib_default = () => "Project Discovery Template";

// src/lambda/test.ts
var handler = async () => ({
  statusCode: 200,
  body: JSON.stringify({ message: lib_default() })
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=test.js.map
