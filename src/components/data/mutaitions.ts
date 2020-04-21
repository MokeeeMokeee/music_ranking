export const submitData = `
  mutation update_data($id: number, $count: number) {
    Update_Data(
    where: {id: {_eq: $id}},
    _set:{
      count: $count
    }
    ) {
      returning{
        id
        title
      }
    }
  }
`
