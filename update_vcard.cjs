const fs = require('fs');
const imgPath = 'public/wp-content/uploads/2024/01/latam-abogados-marcus-ambrose-5.png';
const vcardPath = 'public/marcus-ambrose.vcf';

let vcard = fs.readFileSync(vcardPath, 'utf8');

const imgBase64 = fs.readFileSync(imgPath).toString('base64');

// Format base64 to wrap at 75 chars if needed, though most modern clients handle inline
const formattedBase64 = imgBase64; // .match(/.{1,75}/g).join('\n ');

if (!vcard.includes('PHOTO')) {
    vcard = vcard.replace('END:VCARD', `PHOTO;ENCODING=b;TYPE=PNG:${formattedBase64}\nEND:VCARD`);
}

if (!vcard.includes('CATEGORIES')) {
    vcard = vcard.replace(
        'NOTE:Especialista en Inglés Jurídico e Inmigración.',
        'NOTE:Especialista en Inglés Jurídico e Inmigración. Keywords: ingles juridico, legal english\nCATEGORIES:ingles juridico,legal english'
    );
}

fs.writeFileSync(vcardPath, vcard, 'utf8');
console.log('vCard updated successfully.');
