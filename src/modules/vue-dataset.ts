import {
  Dataset,
  DatasetItem,
  DatasetInfo,
  DatasetPager,
  DatasetSearch,
  DatasetShow,
} from 'vue-dataset'

import { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.component('Dataset', Dataset)
  app.component('DatasetInfo', DatasetInfo)
  app.component('DatasetItem', DatasetItem)
  app.component('DatasetPager', DatasetPager)
  app.component('DatasetSearch', DatasetSearch)
  app.component('DatasetShow', DatasetShow)
}
