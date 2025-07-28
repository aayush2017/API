import { readFile } from 'fs/promises';

export async function loadJsonData(filePath) {
  try {
    const rawData = await readFile(filePath, 'utf8');
    const jsonData = JSON.parse(rawData);
    return jsonData;
  } catch (error) {
    console.error('Error loading JSON file:', error);
    throw error;
  }
}