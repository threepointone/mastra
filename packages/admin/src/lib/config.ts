import { createFramework } from 'core';
import path from 'path';

const configFilePath = process.env.CONFIG_FILE_PATH || path.resolve(process.cwd(), 'example.future.config.ts');
const resolvedPath = path.resolve(process.cwd(), configFilePath);

let framework: ReturnType<typeof createFramework>;

(async () => {
  try {
    console.log({ resolvedPath });
    const { config } = await import(resolvedPath);

    framework = createFramework(config);
  } catch (error) {
    console.error('Error loading config:', error);
  }
})();

export { framework };
