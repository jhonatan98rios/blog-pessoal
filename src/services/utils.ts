export function getCategory() {
  return window.location.hash.substr(1);
}

export function baseImage(src, alt, title) {
    return { src, alt, title }
}

export function genImage({ src, alt, title }) {
  return `<img class="static_content-image" src="${src}" alt="${alt}" title="${title}">`
}

export function genLink(href, label=null, target="_blank") {
  const rel = target == '_blank' ? 'rel="noopener noreferrer"' : null
  return `<a href="${href}" target="${target}" ${rel}> ${label ? label : href} </a>`
}


interface IImage {
  src: string
  alt: string
  title: string
}

interface IPost {
  slug: string
  title: string
  image: IImage
  updateAt: string
  categories: string[]
  style: object
}


const levenshteinDistance = (str1, str2) => {
  const track = Array(str2.length + 1).fill(null).map(() =>
  Array(str1.length + 1).fill(null));
  for (let i = 0; i <= str1.length; i += 1) {
    track[0][i] = i
  }
  for (let j = 0; j <= str2.length; j += 1) {
    track[j][0] = j
  }
  for (let j = 1; j <= str2.length; j += 1) {
    for (let i = 1; i <= str1.length; i += 1) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1

      track[j][i] = Math.min(
        track[j][i - 1] + 1, // deletion
        track[j - 1][i] + 1, // insertion
        track[j - 1][i - 1] + indicator, // substitution
      );
    }
  }
  return track[str2.length][str1.length];
};

export function postsFilter(search: string | string[], posts: Array<IPost>) {

  if (!search) return posts
    
  const filteredPosts = posts.filter(post => {
    let sample = [...post.categories, post.title].join(' ')
    
    return sample.includes(search.toString())
  })

  console.log('>>>>>> filteredPosts', filteredPosts)

  return filteredPosts

}