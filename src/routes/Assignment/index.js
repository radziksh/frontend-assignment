import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'assignment',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Assignment = require('./containers/AssignmentContainer').default
      const reducer = require('./modules/assignment').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'assignment', reducer })

      /*  Return getComponent   */
      cb(null, Assignment)

    /* Webpack named bundle   */
    }, 'assignment')
  }
})
