;(function () {
  /**
   * Top Menu
   * @constructor
  */
  class _TopMenu {
    constructor () {
      this.vue = new App.Vue({
        el: '.top-menu',
        data: {
          actions: [
            {
              id: 'download',
              icon: 'fa-download',
              state: false
            },
            {
              id: 'rename',
              icon: 'fa-pencil',
              state: false
            },
            {
              id: 'remove',
              icon: 'fa-times',
              state: false
            },
            {
              id: 'info',
              icon: 'fa-info',
              state: false
            }
          ],
          folderSize: '0b'
        }
      })
    }

  /**
   * Update actions buttons
   * @param {object} actions - List of actions to update with states
  */
    setActions (actions) {
      $.each(this.vue.$data.actions, (index, value) => {
        if (typeof actions[value.id] !== 'undefined') {
          this.vue.$data.actions[index].state = actions[value.id]
        }
      })
    }

  /**
   * Set the displayed folder size
   * @param {string} size - The size formated
  */
    setFolderSize (size) {
      this.vue.$data.folderSize = size
    }

  /**
   * Set the download link for the download action button
   * @param {string} url - The url to set
  */
    setDowloadLink (url) {
      var action = this.vue.$data.actions[$.indexOfO(this.vue.$data.actions, (e) => { return e.id === 'download' })]
      action.href = url
    }
}
  App.TopMenu = new _TopMenu()
})()
