import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
//import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { StartupTypeCard } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({ searchParams } : {
    searchParams : Promise<{ query?: string }>
}) {
  
  const query = (await searchParams).query;
  const params =  {search: query || null}

  const session = await auth();

  console.log(session);
  console.log(session?.id);

  
  //const posts = await client.fetch(STARTUP_QUERY);
  const {data: posts } = await sanityFetch({query:STARTUP_QUERY,params})

  console.log('Data : '+JSON.stringify(posts,null,2));

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your Startup, <br/> Connect with Enterpreneurs</h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query} />

      </section>
      <section className="section_container">
        <p className="text-30-semibold">
            {query ? `search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
        {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>  

      <SanityLive />
    </>
  );
}