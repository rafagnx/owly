const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('route.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const apiDir = path.resolve(process.cwd(), 'src/app/api');
const routes = walk(apiDir);

routes.forEach(route => {
    const content = fs.readFileSync(route, 'utf8');
    if (!content.includes('force-dynamic')) {
        console.log(`Fixing ${route}`);
        fs.writeFileSync(route, 'export const dynamic = "force-dynamic";\n' + content);
    }
});
