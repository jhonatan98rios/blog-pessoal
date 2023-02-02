import { APIClient } from "infra/http/axios";
import { PostModel } from 'models/Post'


type getAllPostsReturn = {
  posts: PostModel[]
}

export async function getAllPosts(ctx?) {
  const client = APIClient.getInstance(ctx)
  return await client.getAsyncData<getAllPostsReturn>('post')
}


export async function createPost<T>(body: any) {

  const client = APIClient.getInstance()

  return client.api.post('/post', body)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);

      console.log('issues');
      console.log(error.response.data[0].errors.issues);
    });
}

export async function updatePost<T>(slug: string, body: any) {

  const client = APIClient.getInstance()

  return client.api.put(`/post/${slug}`, body)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);

      console.log('issues');
      console.log(error.response.data[0].errors.issues);
    });
}
