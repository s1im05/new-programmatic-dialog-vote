# New Programmatic Vote Dialog

## How to implement on web-site

Import main js-source:
```
<script src="dist/np-vote.js"></script>
```
Create dialog-object and provide some config:
```
<script type="application/javascript">
    const dialog = npDialog({
      title: 'Dialog main question',
      items: [
        {name: 'Answer one', id: 1},
        {name: 'Answer two', id: 2},
        {name: 'Answer three', id: 3},
        {name: 'Answer four', id: 4}
        ],
      url: '?rest=sample',
      feedback: 'Some feedback text for user',
      feedbackDelay: 2000, // delay for feedback text, default 1000 ms
      container: '#containerId', // selector, default 'body'
      showSubtitle: false, // show or hide subtitle, default = true
      mode: 'overlay' // display mode, 'overlay' - full window, 'block' - div-block
    });
</script>
```
Call `.show()` method
```
<script type="application/javascript">
    const dialog = npDialog({ ... });
    ...
    dialog.show();
</script>
```

See example in the `index.html`


## Dev Install

Only if you want to add some changes in src

```
npm install
```
## Build Production Package
```
npm run build-production
```
## Dev build and debugging
```
npm run build-watch
```
