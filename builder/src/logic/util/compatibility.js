import React from 'react'
import { isNil } from 'lodash'

export const errors = [
  [
    isNil(navigator.serviceWorker),
    <li>
      Your browser does not support <a href="http://caniuse.com/#feat=serviceworkers">service workers</a>, which are required for the study preview. This might be because you are browsing in private mode &mdash; if your browser is up to date, please check whether private mode is active.
    </li>
  ],
  [
    [Array.from, Object.entries].some(isNil),
    <li>
      The browser you are using does not support JavaScript features required by the builder. Please update or switch to a modern browser!
    </li>
  ]
].filter(e => e[0]).map(e => e[1])

export const check = (store) => {
  if (errors.length > 0) {
    store.dispatch({
      type: 'SHOW_MODAL',
      modalType: 'SYSTEM_COMPATIBILITY',
      modalProps: {
        large: false,
      },
    })
  }
}
