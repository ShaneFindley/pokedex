import axios from 'axios';

// Fetcher to be globally accessible to the application for SWR.
// I could quite easilly make use of a normal fetch here, however using axios in this case.
export const fetcher = (url: string) => axios.get(url).then(res => res.data).catch(error => { return error });