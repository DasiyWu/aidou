import crun from '@/common/crun'
import QueryEngine from './queryEngine'
import PicBed from './picBed'
import {
  fetchImgToBase64
} from './util'

chrome.browserAction.onClicked.addListener(tab => {
  crun.$emit('show-app', true, true)
})

crun.$on('fetch-expression', (params, cb) => {
  QueryEngine.sogou(params).then(cb)
})

crun.$on('url-to-base64', (url, cb) => {
  fetchImgToBase64(url).then(cb)
})

crun.$on('uniform-url', (base64, cb) => {
  PicBed.weibo(base64).then(cb, console.log)
})
