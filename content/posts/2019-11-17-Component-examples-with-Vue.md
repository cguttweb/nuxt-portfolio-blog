---
layout: posts
title: 'Component examples with Vue'
date: 2019-11-17
---

Today I spent some time going through a couple of videos on the [Laracasts Vue course](https://laracasts.com/series/learn-vue-2-step-by-step) watched the videos during the week but this time I went back through them and coded along. It also introduced me to (yet another) CSS framework [Bulma](https://bulma.io) which as I discovered is based on flexbox. The first example was a simple message component using the structure of the example given in the Bulma documentation instead of adding to the HTML as the title of this post suggests we abstracted it into a Vue component:

```javascript
        Vue.component('message', {
            props: ['title', 'body'],

            data(){
                return {
                    isVisible: true
                }
            },

            template: `
                <article class="message" v-show="isVisible">
                <div class="message-header">
                    <p>{{ title }}</p>  
                    <button class="delete" aria-label="delete" @click="hideModal"></button>
                </div>
                <div class="message-body">
                    {{ body }}
                </div>
            </article>
            `,

            methods: {
                hideModal(){
                    this.isVisible = false;
                }
            }
        })
```

In addition setting props which can then be set in HTML:

```html
    <div id="app" class="container">
        <message title="Hello World" body="Lorem ipsum dolor sit amet."></message>
    </div>
```

Perhaps a more common example that may be used would be that for a modal as per previous example this is used to markup setup in Bulma components section with HTML with a simple button to show the modal.

```javascript
    Vue.component('modal', {
        template: `
        <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <slot></slot>
            </div>
        </div>

        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>`
    })

    new Vue({
        el: '#app',
        data : {
            showModal: false
        }
    })
```

```html
    <div id="app" class="container">
        <modal v-if="showModal" @close="showModal = false">
            <p>Insert some text here</p>
        </modal>
        <button @click="showModal = true">Show Modal</button>
    </div>
```

As the modal shouldn't be visible by default this is set as false in the data with this being changed to true when clicking the button using the `@click` method which is shorthand for `v-on:click`. Using this example it also introduces the use of custom events in this case called close to hide the modal when the button is clicked. Custom events are created using $emit with your name in parentheses.
