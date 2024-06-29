!function() {
    var baseUrl = 'https://config.gorgias.chat'
    var applicationId = window.GORGIAS_CHAT_APP_ID
    var script = document.createElement('script')

    script.src =
        baseUrl +
        '/gorgias-chat-bundle-loader.js?applicationId=' +
        applicationId

    script.id = 'gorgias-chat-bundle-loader'
    document.body.appendChild(script)
}();
