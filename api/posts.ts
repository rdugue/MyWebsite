import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://ralphdugue.ghost.io", //process.env.GHOST_URL,
  key: "566d3511e7f89db63c29ab446e", //process.env.GHOST_KEY,
  version: "v3"
});

export async function getAllPosts() {
  return await api.post
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug: string) {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch(err => {
      console.error(err);
    });
}
