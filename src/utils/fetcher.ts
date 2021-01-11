import axios from 'axios';

// Fetcher to be globally accessible to the application for SWR.
export const fetcher = (url: string) => axios.get(url).then(res => res.data).catch(error => { return error });