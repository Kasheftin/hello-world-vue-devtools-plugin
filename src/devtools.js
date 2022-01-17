import { setupDevtoolsPlugin } from '@vue/devtools-api'

export function setupDevtools (app) {
  console.log('setup devtools plugin for', app)
  setupDevtoolsPlugin({
    id: 'grouped-logs',
    label: 'Grouped Logs',
    app,
    settings: {
      test1: {
        label: 'I like vue devtools',
        type: 'boolean',
        defaultValue: true
      }
    }
  }, (api) => {
    console.log(api, api.getSettings())
    api.on.setPluginSettings((payload) => {
      console.log('setting changed to', payload)
    })
  })
}
