import { mocked } from 'ts-jest/utils'
import { render, screen } from '@testing-library/react'
import Posts, { getStaticProps } from 'pages/posts'

import { getPrismicClient } from 'services/prismic'

const posts = [
  {
    slug: 'test-new-post',
    title: 'Title',
    excerpt: 'Post excerpt',
    updateAt: 'December 25, 2021'
  }
]

jest.mock('services/prismic')


describe('Posts page', () => {

  it('renders correctly', () => {
    const { getByText, getByAltText } = render(
      <Posts posts={posts} />
    )

    screen.logTestingPlaygroundURL()

    // Verifoica se há um teexto Home sendo exibido na tela
    expect(getByText(posts[0].title)).toBeInTheDocument()
  })


  it('loads initial data', async () => {
    const getPrismicClientMocked = mocked(getPrismicClient)

    getPrismicClientMocked.mockReturnValueOnce({
      query: jest.fn().mockResolvedValueOnce({
        results: [
          {
            uid: 'test-new-post',
            data: {
              title: [{ type: 'heading', text: 'Title'}],
              content: [{type: 'paragraph', text: 'Post excerpt'}],
            },
            last_publication_date: '12-25-2021'
          }
        ]
      })
    } as any)

    const response = await getStaticProps({})

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: posts
        },
        revalidate: 43200,
      })
    )
  })
})







