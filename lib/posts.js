import fetch from "node-fetch"

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function getAllPostsData() {
  const res = await fetch(new URL(API_URL));
  const posts = await res.json(res);
  return posts;
}