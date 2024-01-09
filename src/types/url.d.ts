export interface Url {
   url: string
   uriId: string
   uri: string
   title: string
   addedAt: Date
   updatedAt: Date
   shortUrl: string
   order: number
   isPinned: boolean
   isDeleted: boolean
   isArchived: boolean
   createdAt: Date
}

export interface Urls {
   urls: Url[]
}
