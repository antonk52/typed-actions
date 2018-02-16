/* @flow */

import { handleActions as baseHandleActions } from 'redux-actions'
import { type Actions } from './types'

const entries
  : <T: Object>(T) => $TupleMap<$Keys<T>, <V: string>(V) => [V, $ElementType<T, V>]>
  = (Object.entries: any)

const { assign } = Object

export * from './types'

export const createActions
  : <A: Object>(A) => Actions<A>
  = actions => entries(actions).reduce((acc, [type, actionCreator]) => ({
    ...acc,
    [type]: data => assign({ type }, actionCreator(data)),
  }), {})

export const handleActions
  = (handlers, defaultState = {}) => baseHandleActions((handlers: any), defaultState)

export const empty
  : (void) => void
  = () => undefined

/* eslint-disable no-redeclare */
declare function action<P>(payload: P): {|payload: P|}
declare function action<P, M>(payload: P, meta: M): {|payload: P, meta: M|}

export function action(payload, meta) {
  return (meta !== undefined ? { payload, meta } : { payload })
}
/* eslint-enalbe no-redeclare */