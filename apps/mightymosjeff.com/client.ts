import { createClient } from '@sanity/client';

createClient({
    dataset: 'mmj',
    projectId: 'mightymosjeff.com',
    useCdn: true
})