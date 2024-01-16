import { ExpoRequest, ExpoResponse } from 'expo-router/server';

const OPEN_AI_API_KEY = process.env.OPEN_AI_API_KEY;

export function GET(request: ExpoRequest) {
    console.log("Key: ", OPEN_AI_API_KEY)
    return ExpoResponse.json({hello: 'world'});
}