import { parse } from 'yaml'
import path from 'path'
import fs from 'fs'
import { createIntegration, createPackageJson, createTsConfig } from './template'

async function main() {
    const res = await fetch('https://raw.githubusercontent.com/NangoHQ/nango/2ccc00d9cc1b4d88a60307e9654bf4c3dc276ab4/packages/shared/providers.yaml')
    const data = await res.text()
    const parsed = parse(data)
    const entries = Object.entries(parsed).filter(([key, value]: any) => {
        return value.auth_mode === `OAUTH2`
    }).map(([key, value]: any) => {
        return {
            name: key,
            ...value,
        }
    })

    entries.forEach((entry: any) => {
        const modulePath = path.join(process.cwd(), 'packages', entry.name)
        if (!fs.existsSync(modulePath)) {
            fs.mkdirSync(modulePath)
        }

        // write package.json
        const pkgJsonPath = path.join(modulePath, 'package.json')
        fs.writeFileSync(pkgJsonPath, JSON.stringify(createPackageJson(entry.name), null, 2))

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

        const indexPath = path.join(srcPath, 'index.ts')

        const server = new URL(entry.authorization_url)
        const authUrl = getPathFromUrl(entry.authorization_url)
        const tokenEndpoint = getPathFromUrl(entry.token_url)


        const serverEndpoint = `${server.protocol}//${server.host}`.replace('connectionconfig', 'this.config')

        const int = createIntegration({
            name: entry.name.charAt(0).toUpperCase() + entry.name.slice(1).toLowerCase(),
            server: serverEndpoint,
            authEndpoint: authUrl,
            tokenEndpoint
        })


        // fs.writeFileSync(indexPath, int)

        console.log(entry)

    })
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