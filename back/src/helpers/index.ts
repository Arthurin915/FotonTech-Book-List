import { readdirSync, readFileSync } from 'fs';

const IMAGES_DIR = `${__dirname}/../images`;

export const getRandomBookImage = () => {
    const imageFiles = readdirSync(IMAGES_DIR);
    return imageFiles[Math.floor(Math.random() * imageFiles.length)];
}

export const convertImageToBase64 = (filename: string) => {
    return readFileSync(`${IMAGES_DIR}/${filename}`, 'base64');
}

export const getRandomNumber = (min: number, max: number) => {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}