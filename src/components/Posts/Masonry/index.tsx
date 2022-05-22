import styles from './styles.module.scss';

import { FlexiblePost } from "../../../components/Posts/FlexiblePost";

import { IPostsProps } from '../../../types'

export function Masonry({ posts }: Partial<IPostsProps>) {
  return (
    <div className={styles.posts}>

      { posts && 
        posts.map(post => (
          <FlexiblePost 
            key={post.slug} 
            post={post} 
            customStyle={{ 
              ...post.style 
            }}
          />
        ))
      }
    </div>
  );
}
