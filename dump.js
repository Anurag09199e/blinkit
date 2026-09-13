const fs = require('fs');
const { execSync } = require('child_process');
try {
    execSync('npx vite build', { stdio: 'pipe' });
} catch (e) {
    fs.writeFileSync('vite-error.txt', Object.keys(e).join(',') + '\n\n' + e.stdout?.toString() + e.stderr?.toString());
}
