const fs = require('fs');
const path = require('path');

const dir = 'c:\\\\Users\\\\정혜진\\\\OneDrive - XT\\\\문서\\\\업무자료\\\\성원애드피아\\\\03-1.홈페이지\\\\policy\\\\documents';
const outputFile = path.join(dir, '확인필요사항_정리.md');

let resultMd = '# 확인 필요사항 정리\n\n해당 문서는 각 화면 정책서에 기재된 **내부 확인 필요사항** 및 **현업 확인 필요사항**을 취합한 것입니다.\n\n';

function extractSections(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    
    let result = { internal: [], business: [] };
    let currentState = null; // 'internal' or 'business'
    let currentSectionLevel = 0;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].replace('\r', '');
        const trimmed = line.trim();
        
        let headerLevel = 0;
        const headerMatch = trimmed.match(/^(#{1,6})\s/);
        if (headerMatch) headerLevel = headerMatch[1].length;
        
        let matchInternal = trimmed.match(/(?:내부\s*확인\s*필요\s*사항|내부 확인 필요사항|내부확인 필요사항)/);
        let matchBusiness = trimmed.match(/(?:현업\s*확인\s*필요\s*사항|현업 확인 필요사항|현업확인 필요사항)/);
        
        if (headerLevel > 0) {
            if (matchInternal) {
                currentState = 'internal';
                currentSectionLevel = headerLevel;
            } else if (matchBusiness) {
                currentState = 'business';
                currentSectionLevel = headerLevel;
            } else if (currentState && headerLevel <= currentSectionLevel) {
                currentState = null;
            } else if (currentState) {
                if (line.trim() !== '---') {
                    if (currentState === 'internal') result.internal.push(line);
                    else result.business.push(line);
                }
            }
        } else {
            if (!matchInternal && !matchBusiness) {
                if (line.trim() !== '---') {
                    if (currentState === 'internal') result.internal.push(line);
                    else if (currentState === 'business') result.business.push(line);
                }
            } else {
                if (matchInternal) result.internal.push(line);
                if (matchBusiness) result.business.push(line);
            }
        }
    }
    
    // Cleanup empty lines
    while(result.internal.length > 0 && result.internal[result.internal.length-1].trim() === '') result.internal.pop();
    while(result.internal.length > 0 && result.internal[0].trim() === '') result.internal.shift();
    
    while(result.business.length > 0 && result.business[result.business.length-1].trim() === '') result.business.pop();
    while(result.business.length > 0 && result.business[0].trim() === '') result.business.shift();
    
    return result;
}

function traverse(currentDir) {
    const files = fs.readdirSync(currentDir);
    for (const file of files) {
        const fullPath = path.join(currentDir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.md') && !fullPath.includes('확인필요사항_정리.md')) {
            try {
                const sections = extractSections(fullPath);
                if (sections.internal.length > 0 || sections.business.length > 0) {
                    const relativePath = path.relative(dir, fullPath);
                    resultMd += `## [${relativePath}](./${relativePath.replace(/\\\\/g, '/')})\n\n`;
                    
                    if (sections.internal.length > 0) {
                        resultMd += `### 내부 확인 필요사항\n\n`;
                        resultMd += sections.internal.join('\n') + '\n\n';
                    }
                    if (sections.business.length > 0) {
                        resultMd += `### 현업 확인 필요사항\n\n`;
                        resultMd += sections.business.join('\n') + '\n\n';
                    }
                }
            } catch (e) {
                console.error('Error reading ' + fullPath, e.message);
            }
        }
    }
}

traverse(dir);
if (fs.existsSync(outputFile)) fs.unlinkSync(outputFile);
fs.writeFileSync(outputFile, resultMd, 'utf-8');
console.log('Done, created ' + outputFile);
