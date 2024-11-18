import { Project, StructureKind } from 'ts-morph';

// initialize
const project = new Project({
  // Optionally specify compiler options, tsconfig.json, in-memory file system, and more here.
  // If you initialize with a tsconfig.json, then it will automatically populate the project
  // with the associated source files.
  // Read more: https://ts-morph.com/setup/
  tsConfigFilePath: 'tsconfig.json',
  libFolderPath: 'node_modules/typescript/lib',
});

// add source files
const exists = project.getSourceFile();
if (exists) {
  exists.addFunction({});
}
const myClassFile = project.createSourceFile(
  'src/examples/MyClass.ts',
  'export class MyClass2 {}'
);
// const myEnumFile = project.createSourceFile('src/MyEnum.ts', {
//   statements: [
//     {
//       kind: StructureKind.Enum,
//       name: 'MyEnum',
//       isExported: true,
//       members: [{ name: 'member' }],
//     },
//   ],
// });

// project.getSourceFileOrThrow('src/ExistingFile.ts').delete();

// asynchronously save all the changes above
project.save();

// get underlying compiler node from the typescript AST from any node
const compilerNode = myClassFile.compilerNode;
