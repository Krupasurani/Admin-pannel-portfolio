ClassicEditor.create( document.querySelector( '#body' ), {
    comments: {
        // Show the first comment and two most recent comments when collapsed.
        maxCommentsWhenCollapsed: 3,
        // Make comments shorter when collapsed.
        maxCommentCharsWhenCollapsed: 100,
        // Allow for up to 3 comments before collapsing.
        maxThreadTotalWeight: 600,

        // You may set comments editor configuration.
        // In this case, use the default configuration.
        editorConfig: {}
    },
    sidebar: {
        container: document.querySelector( '#sidebar' ),
        preventScrollOutOfView: true
    }
} );
