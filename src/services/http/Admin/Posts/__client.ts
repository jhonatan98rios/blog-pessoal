import { AxiosHttpClient } from "infra/http/AxiosHttpClient";
import { PostModel } from 'models/Post'


type getAllPostsReturn = {
  posts: PostModel[]
}

export async function getAllPosts(ctx?) {
  const client = AxiosHttpClient.getInstance(ctx)
  return await client.getAsyncData<getAllPostsReturn>('post')
}


export async function createPost<T>(body: any) {

  const client = AxiosHttpClient.getInstance()

  return client.api.post('/post', body)
    .then(function (response) {
      console.log(response);
      return response
    })
    .catch(function (error) {
      console.log(error);

      console.log('issues');
      console.log(error.response.data[0].errors.issues);
      return error
    });
}

export async function updatePost<T>(slug: string, body: any) {

  const client = AxiosHttpClient.getInstance()

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
