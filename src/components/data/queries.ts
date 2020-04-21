export const dataQuery = `
  query DataQuery {
    data(order_by: {count: desc}) {
      id
      count
      image
      link
      title
    }
  }
`
