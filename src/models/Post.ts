import { CategoryModel } from './Category'
import { ImageModel } from './Image'

export interface PostModel {
    slug: string
    title: string
    subtitle: string
    content: string
    categories: CategoryModel[]
    createdAt: string
    updatedAt: string
    banner: ImageModel[]
    seo_title: string
    seo_description: string
    seo_keywords: string
}