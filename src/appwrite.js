import { Client, Databases, ID, Query } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_API_DATABASE_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_API_TABLE_ID;

// console.log("ENV CHECK", {
//   projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
//   dbId: import.meta.env.VITE_APPWRITE_API_DATABASE_ID,
//   tableId: import.meta.env.VITE_APPWRITE_API_TABLE_ID,
// });

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);

const database = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
  //1. Use Appwrite SDK to check if a record for the search term already exists in the database.
  try {
    const result = await database.listDocuments(DATABASE_ID, TABLE_ID, [
      Query.equal("searchTerm", searchTerm),
    ]);

    if (result.documents.length > 0) {
      const doc = result.documents[0];

      await database.updateDocument(DATABASE_ID, TABLE_ID, doc.$id, {
        count: doc.count + 1,
      });
    } else {
      await database.createDocument(DATABASE_ID, TABLE_ID, ID.unique(), {
        searchTerm,
        count: 1,
        movie_id: movie.id,
        poster_url: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      });
    }
  } catch (error) {
    console.log(error);
  }

  //2. If it exists, increment the search count for that term.
  //3. If it doesn't exist, create a new record with the search term and set the count to 1.
};

export const getTrendingMovies = async () => {
  try {
    const result = await database.listDocuments(DATABASE_ID, TABLE_ID, [
      Query.limit(5),
      Query.orderDesc("count"),
    ]);
    return result.documents;
  } catch (error) {
    console.log(error);
    return [];
  }
};
