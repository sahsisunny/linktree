export function getDomainFromUrl(url: string): string | null {
   try {
      const withoutProtocol = url.replace(/^(.*:\/\/)?/, '')
      const withoutPathAndQuery = withoutProtocol.split('/')[0]
      const parts = withoutPathAndQuery.split('.')
      const domain = parts.length > 1 ? parts[parts.length - 2] : parts[0]
      return domain.charAt(0).toUpperCase() + domain.slice(1)
   } catch (error) {
      console.log(error)
      return null
   }
}

export function extractBaseUrl(fullUrl: string): string {
   const url = new URL(fullUrl)
   return `${url.protocol}//${url.host}`
}
