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

export function isValidUrl(url: string): boolean {
   try {
      // use REGEX to check if url is valid
      const pattern = new RegExp(
         '^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$',
         'i',
      ) // fragment locator
      if (!pattern.test(url)) {
         return false
      }
      return true
   } catch (error) {
      return false
   }
}
