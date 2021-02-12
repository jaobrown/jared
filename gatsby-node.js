const path = require(`path`)

const slugify = (string) => {
  const a =
    'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b =
    'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      pages: allSanityPage {
        nodes {
          _id
          slug {
            current
          }
        }
      }
      allWork: allSanityWork {
        nodes {
          _id
          title
          companyName
        }
      }
    }
  `)

  // create pages
  result.data.pages.nodes.forEach((page) => {
    const slug = page.slug ? page.slug.current : `/`
    reporter.info(`Creating page at route: ${slug}`)
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/page.jsx`),
      context: {
        _id: page._id,
      },
    })
  })

  // create work
  result.data.allWork.nodes.forEach((work) => {
    const fullWorkName = `${work.title} ${work.companyName}`
    const slug = slugify(fullWorkName)
    reporter.info(`Creating page at route: ${slug}`)
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/work.jsx`),
      context: {
        _id: work._id,
      },
    })
  })
}
