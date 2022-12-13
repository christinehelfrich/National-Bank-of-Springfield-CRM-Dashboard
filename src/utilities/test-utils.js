import { queryHelpers } from '@testing-library/dom'
const domTestingLib = require('@testing-library/dom')

export const queryByRowId = queryHelpers.queryByAttribute.bind(
  null,
  'aria-rowindex',
)

export const queryAllByRowId = queryHelpers.queryAllByAttribute.bind(
  null,
  'aria-rowindex',
)

export const queryByColumnId = queryHelpers.queryByAttribute.bind(
  null,
  'aria-colindex',
)

export const queryAllByColumnId = queryHelpers.queryAllByAttribute.bind(
  null,
  'aria-colindex',
)

export function getAllByRowId(container, id, ...rest) {
  const els = queryAllByRowId(container, id, ...rest)
  if (!els.length) {
    throw queryHelpers.getElementError(
      `Unable to find an element by: [row-id="${id}"]`,
      container,
    )
  }
  return els
}

export function getByRowId(container, id, ...rest) {
  // result >= 1
  const result = getAllByRowId(container, id, ...rest)
  if (result.length > 1) {
    throw queryHelpers.getElementError(
      `Found multiple elements with the [row-id="${id}"]`,
      container,
    )
  }
  return result[0]
}

export function getAllByColumnId(container, id, ...rest) {
  const els = queryAllByColumnId(container, id, ...rest)
  if (!els.length) {
    throw queryHelpers.getElementError(
      `Unable to find an element by: [Column-id="${id}"]`,
      container,
    )
  }
  return els
}

export function getByColumnId(container, id, ...rest) {
  // result >= 1
  const result = getAllByColumnId(container, id, ...rest)
  if (result.length > 1) {
    throw queryHelpers.getElementError(
      `Found multiple elements with the [Column-id="${id}"]`,
      container,
    )
  }
  return result[0]
}

// re-export with overrides
module.exports = {
  ...domTestingLib,
  getByRowId,
  getAllByRowId,
  getByColumnId,
  getAllByColumnId,
  queryByRowId,
  queryAllByRowId,
  queryByColumnId,
  queryAllByColumnId,
}
