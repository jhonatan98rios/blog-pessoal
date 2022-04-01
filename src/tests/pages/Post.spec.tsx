import { mocked } from 'ts-jest/utils'
import { render, screen } from '@testing-library/react'
import Post, { getStaticProps } from '../../pages/posts/[slug]'
import { getPrismicClient } from '../../services/prismic'

const post = {
  slug: 'test-new-post',
  title: 'Title',
  content: '<p> Post content </p>',
  updateAt: 'December 25, 2021'
}

jest.mock('../../services/prismic')

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        isFallback: false
      }
    }
  }
})

describe('Post page', () => {
  
  it('renders correctly', () => {
    const { getByText } = render(
      <Post post={post} />
    )

    screen.logTestingPlaygroundURL()
  
    // Verifoica se há um teexto Home sendo exibido na tela
    expect(getByText(post.title)).toBeInTheDocument()
  })


  it('loads initial data', async () => {
    const getPrismicClientMocked = mocked(getPrismicClient)

    getPrismicClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [{ type: 'heading', text: 'Title'}],
          content: [{type: 'paragraph', text: '<p> Post content </p>'}],
        },
        last_publication_date: '12-25-2021'
      })
    } as any)

    const response = await getStaticProps({
      params: { slug: 'test-new-post' }
    })

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: post
        },
        revalidate: 43200,
      })
    )
  })
})







