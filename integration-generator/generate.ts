import path from 'path'
import fs from 'fs'
import { createIntegration, createPackageJson, createTsConfig } from './template'
import { sources } from './source'

async function main() {
    for (const source of sources) {
        const name = source["Integration Name"]
        const authorization_url = source["Authorization URL"]
        const token_url = source["Token URL"]
        const openapi_url = source["OpenAPI integration"]

        if (!authorization_url) {
            return
        }

        const modulePath = path.join(process.cwd(), 'packages', name)


        if (!fs.existsSync(modulePath)) {
            fs.mkdirSync(modulePath)
        } else {
            return
        }

        // write package.json
        const pkgJsonPath = path.join(modulePath, 'package.json')
        fs.writeFileSync(pkgJsonPath, JSON.stringify(createPackageJson(name), null, 2))

        // write tsconfig
        const tsConfigPath = path.join(modulePath, 'tsconfig.json')
        fs.writeFileSync(tsConfigPath, JSON.stringify(createTsConfig(), null, 2))


        // dts.config.ts
        fs.writeFileSync(path.join(modulePath, 'dts.config.ts'), `
    import image from '@rollup/plugin-image';

    export default {
      rollup(config, options) {
        config.plugins.push(image());
        return config;
      },
    };
            `)

        const srcPath = path.join(modulePath, 'src')

        if (!fs.existsSync(srcPath)) {
            fs.mkdirSync(srcPath)
        }

        const openapispecRes = await fetch(openapi_url)
        const openapi = await openapispecRes.text()

        fs.writeFileSync(path.join(srcPath, 'openapi.ts'), `
        export default ${openapi}
        `)

        const indexPath = path.join(srcPath, 'index.ts')

        const server = new URL(authorization_url)
        const authUrl = getPathFromUrl(authorization_url)
        const tokenEndpoint = getPathFromUrl(token_url)


        const serverEndpoint = `${server.protocol}//${server.host}`.replace('connectionconfig', 'this.config')

        const int = createIntegration({
            name: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
            server: serverEndpoint,
            authEndpoint: authUrl,
            tokenEndpoint
        })

        fs.writeFileSync(indexPath, int)


    }
}

function getPathFromUrl(url: string): string {
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.pathname;
    } catch (error) {
        console.error("Invalid URL:", error);
        return "";
    }
}

main()