import { createClient } from 'next-sanity'

//import { apiVersion, dataset, projectId } from '../env'

console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log(process.env.NEXT_PUBLIC_SANITY_DATASET);
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: 'v1',
  token:'sksne4qcgTgEcrJp016xuZEo5dGA74dpYUuJPIzGhl3gMQ2mDq2J1ny9BSqXygr6cogds51EO2qassfPra8pDyt4P2wUc7xOguUwGP1d07VM3Tt0iZZdylX1ZDJaLIBJCbfQvynVDClnknrjPtfNYp1TBun6a5gHB537V6kJhviTD7YXWYiA'
});

// export const client = createClient({
//   projectId:'woorkdzf',
//   dataset:'nr_yc_directory',
//   apiVersion:'2024-11-30',
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })
