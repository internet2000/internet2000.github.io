module.exports = function(eleventyConfig) {
  // eleventyConfig.addFilter('excerpt', function(content) {
  //   return content
  //     .replace(/(<([^>]+)>)/ig, '')
  //     .split(' ')
  //     .filter((word, idx) => idx < 30)
  //     .join(' ') + ' …'
  // })
  // eleventyConfig.addFilter('getByTitle', function(collection, title) {
  //   const item = collection.find(item => item.data.title === title)
  //   return item || {
  //     data: {
  //       slides: []
  //     }
  //   }
  // })
  // eleventyConfig.addFilter('checkPage', function(path, collection) {
  //   const search = new URL(path.endsWith('/') ? path : path + '/')
  //   const found = collection.find(p => search.pathname === p.url)
  //   return found ? `OK (layout: ${found.data.layout})` : '<strong>KO</strong>'
  // })
  // eleventyConfig.addFilter('property', function(path, propName, collection) {
  //   const item = collection.find(item => item.page.inputPath === './' + path)
  //   return item ? item[propName] : ''
  // })
  // eleventyConfig.addFilter('displayDate', function(dateStr) {
  //   const date = new Date(dateStr)
  //   // const month = date.getMonth() + 1
  //   // const display = `${date.getFullYear()}-${month < 10 ? '0' + month : month}-${date.getDate()}`
  //   const month = date.toLocaleString('default', { month: 'long' })
  //   const display = `${date.getDate()} ${month} ${date.getFullYear()}`
  //   return display
  // })
  // eleventyConfig.addFilter('moveAttr', function(arr, attr, dest) {
  //   return arr.map(item => ({
  //     ...item,
  //     [dest]: {
  //       ...item[dest],
  //       [attr]: item[attr],
  //     },
  //   }))
  // })
  // eleventyConfig.addFilter('startsWith', function(val, start) {
  //   return val.startsWith(start)
  // })
  // eleventyConfig.addFilter('sort', function(arr, attr) {
  //   return arr.sort((first, second) => parseInt(first[attr]) - parseInt(second[attr]))
  // })
  // eleventyConfig.addFilter('where', function(arr, attr, val) {
  //   return arr.filter(item => item[attr] === val)
  // })
  eleventyConfig.addFilter('whereData', function(arr, attr, val) {
    return arr.filter(item => item.data[attr] === val)
  })
  // eleventyConfig.addFilter('langPath', function(lang) {
  //   return lang === 'fr' ? '/fr' : ''
  // })
  // eleventyConfig.addFilter('langUrl', function(path, lang) {
  //   if(lang == 'en' && path.startsWith('/fr')) return path.substr(3)
  //   if(lang == 'fr' && !path.startsWith('/fr')) return '/fr'+path
  //   return path
  // })
  // eleventyConfig.addFilter('toLang', function(pathname, current, lang) {
  //   if(current === 'en' && lang === 'fr') {
  //     if (pathname.startsWith('/blog/')) {
  //       return '/fr/blog/'
  //     } else {
  //       return '/fr' + pathname
  //     }
  //   }
  //   else if(current === 'fr' && lang === 'en') {
  //     if (pathname.startsWith('/fr')) {
  //       if (pathname.startsWith('/fr/blog/')) {
  //         return '/blog/'
  //       } else {
  //         return pathname.substr('3')
  //       }
  //     }
  //   }
  // })


  // plugins
  const sitemap = require("@quasibit/eleventy-plugin-sitemap")
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://www.belighted.com",
    },
  })

  // eleventyConfig.addFilter('tagFilter', function(collection, category) {
  //   if (!category) return collection
  //   const filtered = collection.filter(item => item.data.tags.includes(category))
  //   return filtered
  // })

  // collections
  // eleventyConfig.addCollection('pages', async function(collectionApi) {
  //   return collectionApi.getFilteredByTag('page')
  //     .filter(item => !item.data.pagination || !item.data.pagination.previous)
  // })
  // eleventyConfig.addCollection('authors', function(collectionApi) {
  //   return collectionApi.getFilteredByGlob('content/authors/**/*.md')
  //     .map(item => item.data)
  //   // const tags = collectionApi.getFilteredByGlob('content/**/*.md')
  //   //   .flatMap(item => item.data.tags)
  //   // // remove duplicates using Set
  //   // return [...new Set(tags)]
  // })
  // eleventyConfig.addCollection('team', function(collectionApi) {
  //   return collectionApi.getFilteredByGlob('content/team/**/*.md')
  //     .map(item => item.data)
  // })
  // eleventyConfig.addCollection('tags', function(collectionApi) {
  //   return collectionApi.getFilteredByGlob('content/tags/**/*.md')
  //     .map(item => item.data)
  //   // const tags = collectionApi.getFilteredByGlob('content/**/*.md')
  //   //   .flatMap(item => item.data.tags)
  //   // // remove duplicates using Set
  //   // return [...new Set(tags)]
  // })
  // 
  // // eleventyConfig.addCollection('case-studies', function(collectionApi) {
  // //   return collectionApi.getFilteredByGlob('content/case-studies/**/*.md')
  // // })

  // eleventyConfig.addCollection('slideshows', function(collectionApi) {
  //   return collectionApi.getFilteredByGlob('content/slideshows/**/*.md')
  // })

  // eleventyConfig.addCollection('postsfr', function(collectionApi) {
  //   return collectionApi.getFilteredByGlob('content/blog/**/*.md')
  //     .filter(p => p.data.lang === 'fr')
  //     .sort((post1, post2) => post2.data.date - post1.data.date)
  // })

  // eleventyConfig.addCollection('postsen', function(collectionApi) {
  //   return collectionApi.getFilteredByGlob('content/blog/**/*.md')
  //     .filter(p => p.data.lang === 'en')
  //     .sort((post1, post2) => post2.data.date - post1.data.date)
  // })

  eleventyConfig.addCollection('posts', function(collectionApi) {
    return collectionApi.getFilteredByGlob('_posts/*.md')
  })

  // slideshow
  // eleventyConfig.addPassthroughCopy({
  //   'node_modules/@splidejs/splide/dist/js': 'js',
  //   'node_modules/@splidejs/splide/dist/css': 'css',
  // })

  // // image resize
  // const Image = require("@11ty/eleventy-img")
  // eleventyConfig.addAsyncShortcode("thumbnail", async (src, alt, width, classList) => {
  //   if(src) {
  //     const outputFormat = 'jpg'
  //     let stats = await Image('./' + src, {
  //       widths: [width],
  //       formats: [outputFormat],
  //       urlPath: "/images/",
  //       outputDir: "./images/",
  //     })

  //     let props = stats[outputFormat].pop()
  //     return `<img class="${classList}" src="${props.url}" width="${props.width}" height="${props.height}" alt="${alt}">`
  //   }
  //   return ''
  // })

  // copy folders
  eleventyConfig.addPassthroughCopy('assets')
  eleventyConfig.addPassthroughCopy('uploads')
  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('css/*.css')
  eleventyConfig.addPassthroughCopy('css/*.jpg') // favicon
  eleventyConfig.addPassthroughCopy('css/*.png') // favicon
  eleventyConfig.addPassthroughCopy('css/*.ico') // favicon
  eleventyConfig.addPassthroughCopy('js')
  eleventyConfig.addPassthroughCopy('CNAME')

  // other config
  return {
    baseurl: process.env.BASE_URL,
    dir: {
      layouts: '_layouts',
      includes: '_includes',
    },
  }
}
